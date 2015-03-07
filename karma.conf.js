module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'test/spec/*Spec.js'
    ],

    exclude: [],

    preprocessors: {
      'test/**/*.js': 'browserify'
    },

    reporters: ['progress'],

    coverageReporter: {
      type : 'lcov',
      dir : 'test/coverage'
    },

    port: 8080,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
