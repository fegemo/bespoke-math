const { src, dest, series, watch } = require('gulp')
const terser = require('gulp-terser')
const header = require('gulp-header')
const rename = require('gulp-rename')
const eslint = require('gulp-eslint')
const connect = require('gulp-connect')
const del = require('delete')
const karma = require('karma')
const browserify = require('browserify')
const datauri = require('datauri/sync')
const coveralls = require('@kollavarsham/gulp-coveralls')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const merge = require('merge-stream')
const ghpages = require('gh-pages')
const path = require('path')
const pkg = require('./package.json')


function clean() {
  return del([
    'dist',
    'demo/**/demo.bundled.js',
    'test/coverage'
  ])
}

function lint() {
  return src(['gulpfile.js', 'lib/**/*.js', 'specs/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}

function test(done) {
  const parseConfig = karma.config.parseConfig
  const Server = karma.Server
  parseConfig(path.resolve('karma.conf.js'), null, {
    promiseConfig: true,
    throwErrors: true
  }).then(karmaConfig => {
    const server = new Server(karmaConfig, () => {
      done()
    })
    server.start()
  })
}

function coverageReport() {
  return src(['test/coverage/**/lcov.info']).pipe(coveralls())
}

function compileDemo() {
  let tasks = [
    {
      inputFolder: 'demo/fonts-available-offline'
    },
    {
      inputFolder: 'demo/fonts-from-cdn'
    }
  ]

  tasks = tasks.map(task =>
    browserify({ debug: false })
      .add(path.join(task.inputFolder, 'demo.js'))
      .bundle()
      .pipe(source('demo.bundled.js'))
      .pipe(dest(task.inputFolder))
      .pipe(connect.reload())
  )

  return merge(tasks)
}

function prependFontsURLWithCDN(cdnPrefix) {
  return function(relativeUrl) {
    if (
      ['.woff', '.woff2', '.ttf', '.eot'].indexOf(path.extname(relativeUrl)) !==
      -1
    ) {
      relativeUrl = cdnPrefix.concat(relativeUrl)
    }
    return relativeUrl
  }
}

function encodeFontsInDataURI(relativeUrl) {
  // the .woff2 format is supported by anything but IE9+
  // we include just that one b/c otherwise the file size would exceed 2MB
  if (
    [/*'.woff', */'.woff2'/*, '.ttf', '.eot'*/].indexOf(
      path.extname(relativeUrl)
    ) !== -1
  ) {
    return datauri(
      path.resolve(__dirname, 'node_modules/katex/dist/', relativeUrl)
    ).content
  }
  return relativeUrl
}

function getInstalledPackageVersion(packageName) {
  let packageJson, version
  try {
    packageJson = require(path.resolve(
      'node_modules',
      packageName,
      'package.json'
    ))
    if (packageJson) {
      version = packageJson.version
    }
  } catch (e) {
    console.error(
      'Failed trying to get the installed version of the package: ' +
        packageName +
        '. Reason: ' +
        e
    )
  }
  return version
}

function compile() {
  let tasks = [
    {
      outputFileName: 'bespoke-math.js',
      outputMinFileName: 'bespoke-math.min.js',
      processingCssPaths: prependFontsURLWithCDN(
        'https://cdn.jsdelivr.net/npm/katex@' +
          (getInstalledPackageVersion('katex') || '0.13.3') +
          '/dist/'
      )
    }
    ,
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
      .pipe(
        terser({
          ecma: 2020
        })
      )
      .pipe(dest('dist'))
      .pipe(connect.reload())
  )

  return merge(tasks)
}

function dev() {
  const port = 8085

  watch('lib/**/*.js', series(test, lint, compile))
  watch('test/spec/**/*.js', test)
  
  connect.server({
    root: 'demo',
    livereload: true,
    port
  })
}

function deploy(cb) {
  ghpages.publish(path.join(__dirname, 'demo'), cb)
}


exports.clean = clean
exports.lint = lint
exports.compile = series(lint, compile, compileDemo)
exports.test = series(lint, test)
exports.dev = series(compileDemo, dev)
exports.coveralls = series(exports.test, coverageReport)
exports.deploy = deploy
