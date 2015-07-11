var gulp = require('gulp'),
  del = require('del'),
  jshint = require('gulp-jshint'),
  map = require('vinyl-map'),
  istanbul = require('istanbul'),
  karma = require('karma').server,
  coveralls = require('gulp-coveralls'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
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

gulp.task('clean', function(done) {
  del([
    'dist',
    'lib-instrumented',
    'test/coverage'
  ], done);
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
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('coveralls', ['test'], function() {
  return gulp.src(['test/coverage/lcov/**/lcov.info'])
    .pipe(coveralls());
});

gulp.task('compile', ['clean'], function() {
  return browserify({debug: true, standalone: 'bespoke.plugins.math'})
    .add('./lib/bespoke-math.js')
    .transform('brfs')
    .bundle()
    .pipe(source('bespoke-math.js'))
    .pipe(buffer())
    .pipe(header([
      '/*!',
      ' * <%= name %> v<%= version %>',
      ' *',
      ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
      ' * This content is released under the <%= licenses[0].type %> license',
      ' * <%= licenses[0].url %>',
      ' */\n\n'
    ].join('\n'), pkg))
    .pipe(gulp.dest('dist'))
    .pipe(rename('bespoke-math.min.js'))
    .pipe(uglify())
    .pipe(header([
      '/*! <%= name %> v<%= version %> ',
      '© <%= new Date().getFullYear() %> <%= author.name %>, ',
      '<%= licenses[0].type %> License */\n'
    ].join(''), pkg))
    .pipe(gulp.dest('dist'));
});
