const { src, dest, series, parallel, watch } = require('gulp'),
  map = require('vinyl-map'),
  terser = require('gulp-terser'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  eslint = require('gulp-eslint'),
  merge = require('merge-stream'),
  buffer = require('vinyl-buffer'),
  webserver = require('gulp-webserver'),
  coveralls = require('gulp-coveralls'),
  source = require('vinyl-source-stream');

const del = require('delete'),
  ghpages = require('gh-pages'),
  browserify = require('browserify');

const istanbul = require('istanbul'),
  karma = require('karma');

const path = require('path');
const pkg = require('./package.json');


function clean() {
  return del([
    'dist',
    'demo/demo.bundled.js',
    'lib-instrumented',
    'test/coverage'
  ]);
}

function lint() {
  return src(['gulpfile.js', 'lib/**/*.js', 'specs/**/*.js']).pipe(
    eslint.failAfterError()
  );
}

function instrument() {
  return src('lib/**/*.js')
    .pipe(
      map((code, filename) => {
        const instrumenter = new istanbul.Instrumenter(),
          relativePath = path.relative(__dirname, filename);

        return instrumenter.instrumentSync(code.toString(), relativePath);
      })
    )
    .pipe(dest('lib-instrumented'));
}

function test(done) {
  const server = new karma.Server(
    {
      configFile: __dirname + '/karma.conf.js'
    },
    function() {
      done();
    }
  );

  server.start();
}

function coverageReport() {
  return src(['test/coverage/**/lcov.info']).pipe(coverageReport());
}

function compileDemo() {
  let tasks = [
    {
      inputFolder: 'demo/fonts-available-offline'
    },
    {
      inputFolder: 'demo/fonts-from-cdn'
    }
  ];

  tasks = tasks.map(task =>
    browserify({ debug: false })
      .add(path.join(task.inputFolder, 'demo.js'))
      .bundle()
      .pipe(source('demo.bundled.js'))
      .pipe(dest(task.inputFolder))
  );

  return merge(tasks);
}

function prependFontsURLWithCDN(cdnPrefix) {
  return function(relativeUrl) {
    var path = require('path');

    if (
      ['.woff', '.woff2', '.ttf', '.eot'].indexOf(path.extname(relativeUrl)) !==
      -1
    ) {
      relativeUrl = cdnPrefix.concat(relativeUrl);
    }
    return relativeUrl;
  };
}

function encodeFontsInDataURI(relativeUrl) {
  const DataUri = require('datauri');

  // the .woff format is supported by IE9+ and all majors
  // we include just that one b/c otherwise the file size would exceed 2MB
  if (
    ['.woff' /*, '.woff2', '.ttf', '.eot'*/].indexOf(
      path.extname(relativeUrl)
    ) !== -1
  ) {
    return new DataUri(path.resolve(__dirname, 'node_modules/katex/dist/', relativeUrl)).content;
  }
  return relativeUrl;
}

function getInstalledPackageVersion(packageName) {
  let packageJson, version;
  try {
    packageJson = require(path.resolve(
      'node_modules',
      packageName,
      'package.json'
    ));
    if (packageJson) {
      version = packageJson.version;
    }
  } catch (e) {
    console.error(
      'Failed trying to get the installed version of the package: ' +
        packageName +
        '. Reason: ' +
        e
    );
  }
  return version;
}

function compile() {
  let tasks = [
    {
      outputFileName: 'bespoke-math.js',
      outputMinFileName: 'bespoke-math.min.js',
      processingCssPaths: prependFontsURLWithCDN(
        'https://cdn.jsdelivr.net/npm/katex@' +
          (getInstalledPackageVersion('katex') || '0.10.1') +
          '/dist/'
      )
    },
    {
      outputFileName: 'bespoke-math-offline-fonts.js',
      outputMinFileName: 'bespoke-math-offline-fonts.min.js',
      processingCssPaths: encodeFontsInDataURI
    }
  ].map(task =>
    browserify({ debug: false, standalone: 'bespoke.plugins.math' })
      .add('./lib/bespoke-math.js')
      .transform('browserify-css', {
        global: true,
        minify: true,
        autoInject: true,
        rootDir: './node_modules/katex/dist',
        processRelativeUrl: task.processingCssPaths
      })
      .bundle()
      .pipe(source(task.outputFileName))
      .pipe(buffer())
      .pipe(
        header(
          [
            '/*!',
            ' * <%= name %> v<%= version %>',
            ' *',
            ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
            ' * This content is released under the <%= license %> license',
            ' * ',
            ' */\n\n'
          ].join('\n'),
          pkg
        )
      )
      .pipe(dest('dist'))
      .pipe(rename(task.outputMinFileName))
      .pipe(terser())
      .pipe(
        header(
          [
            '/*! <%= name %> v<%= version %> ',
            '© <%= new Date().getFullYear() %> <%= author.name %>, ',
            '<%= license %> License */\n'
          ].join(''),
          pkg
        )
      )
      .pipe(dest('dist'))
  );

  return merge(tasks);
}

function dev() {
  const port = 8085;

  watch('lib/**/*.js', series(test, lint, compile));
  watch('test/spec/**/*.js', test);

  src('demo').pipe(
    webserver({
      livereload: true,
      open: true,
      port
    })
  );
}

function deploy(cb) {
  ghpages.publish(path.join(__dirname, 'demo'), cb);
}


exports.clean = clean;
exports.lint = lint;
exports.compile = series(lint, compile);
exports.test = series(lint, instrument, test);
exports.dev = series(compileDemo, dev);
exports.coveralls = series(exports.test, coverageReport);
exports.deploy = deploy;
