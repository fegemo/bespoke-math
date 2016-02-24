var gulp = require('gulp'),
  gutil = require('gulp-util'),
  del = require('del'),
  jshint = require('gulp-jshint'),
  map = require('vinyl-map'),
  istanbul = require('istanbul'),
  karma = require('karma'),
  coveralls = require('gulp-coveralls'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  merge = require('merge-stream'),
  pkg = require('./package.json'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  path = require('path');

gulp.task('default', ['clean', 'lint', 'test', 'compile']);
gulp.task('dev', ['compile', 'lint', 'test', 'watch']);

gulp.task('watch', function() {
  gulp.watch('lib/**/*.js', ['test', 'lint', 'compile']);
  gulp.watch('test/spec/**/*.js', ['test']);
});

gulp.task('clean', function() {
  return del([
    'dist',
    'demo/demo.bundled.js',
    'lib-instrumented',
    'test/coverage'
  ]);
});

gulp.task('lint', function() {
  return gulp.src(['gulpfile.js', 'lib/**/*.js', 'specs/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('instrument', function() {
  return gulp.src('lib/bespoke-math.js')
    .pipe(map(function(code, filename) {
      var instrumenter = new istanbul.Instrumenter(),
        relativePath = path.relative(__dirname, filename);
      return instrumenter.instrumentSync(code.toString(), relativePath);
    }))
    .pipe(gulp.dest('lib-instrumented'));
});

gulp.task('test', ['instrument'], function(done) {
  var server = new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
  server.start();
});

gulp.task('coveralls', ['test'], function() {
  return gulp.src(['test/coverage/lcov/**/lcov.info'])
    .pipe(coveralls());
});

gulp.task('compile:demo', ['compile'], function() {
  var path = require('path'),
    tasks = [
    {
      inputFolder: 'demo/fonts-available-offline'
    },
    {
      inputFolder: 'demo/fonts-from-cdn'
    }
  ];

  tasks = tasks.map(function(task) {
    return browserify({ debug: true })
    .add(path.join(task.inputFolder, 'demo.js'))
    .bundle()
    .pipe(source('demo.bundled.js'))
    .pipe(gulp.dest(task.inputFolder));
  });

  return merge(tasks);
});

gulp.task('deploy:demo', ['compile:demo'], function(done) {
  require('gh-pages').publish(path.join(__dirname, 'demo'), { logger: gutil.log }, done);
});

function encodeFontsInDataURI(relativeUrl) {
  var path = require('path'),
    DataUri = require('datauri');

  // the .woff format is supported by IE9+ and all majors
  // we include just that one b/c otherwise the file size would exceed 2MB
  if (['.woff' /*, '.woff2', '.ttf', '.eot'*/].indexOf(path.extname(relativeUrl)) !== -1) {
    return new DataUri(path.resolve(__dirname, 'katex', relativeUrl)).content;
  }
  return relativeUrl;
};

function prependFontsURLWithCDN(cdnPrefix) {
  return function(relativeUrl) {
    var path = require('path');

    if (['.woff', '.woff2', '.ttf', '.eot'].indexOf(path.extname(relativeUrl)) !== -1) {
      relativeUrl = cdnPrefix.concat(relativeUrl);
    }
    return relativeUrl;
  }
};

function getInstalledPackageVersion(packageName) {
  var path = require('path'),
    packageJson,
    version;
  try {
    packageJson = require(path.resolve('node_modules', packageName, 'package.json'));
    if (packageJson) {
      version = packageJson.version;
    }
  } catch(e) {
    console.error('Failed trying to get the installed version of the package: ' + packageName + '. Reason: ' + e);
  }
  return version;
}


gulp.task('compile', ['clean'], function() {
  var tasks = [
    {
      outputFileName: 'bespoke-math.js',
      outputMinFileName: 'bespoke-math.min.js',
      processingCssPaths: prependFontsURLWithCDN('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/' + (getInstalledPackageVersion('katex') || '0.5.1') + '/')
    },
    {
      outputFileName: 'bespoke-math-offline-fonts.js',
      outputMinFileName: 'bespoke-math-offline-fonts.min.js',
      processingCssPaths: encodeFontsInDataURI
    }
  ];

  tasks = tasks.map(function(task) {
    return browserify({debug: true, standalone: 'bespoke.plugins.math'})
      .add('./lib/bespoke-math.js')
      .transform('browserify-css', {
        processRelativeUrl: task.processingCssPaths,
        rootDir: './katex'
      })
      .transform('brfs')
      .bundle()
      .pipe(source(task.outputFileName))
      .pipe(buffer())
      .pipe(header([
        '/*!',
        ' * <%= name %> v<%= version %>',
        ' *',
        ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
        ' * This content is released under the <%= license %> license',
        ' * ',
        ' */\n\n'
      ].join('\n'), pkg))
      .pipe(gulp.dest('dist'))
      .pipe(rename(task.outputMinFileName))
      .pipe(uglify())
      .pipe(header([
        '/*! <%= name %> v<%= version %> ',
        '© <%= new Date().getFullYear() %> <%= author.name %>, ',
        '<%= license %> License */\n'
      ].join(''), pkg))
      .pipe(gulp.dest('dist'));
  });

  return merge(tasks);
});
