module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      'test/spec/*Spec.js'
    ],
    exclude: [],

    preprocessors: {
      'test/**/*.js': 'browserify',
      'lib/**/*.js': 'coverage'
    },
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'test/coverage',
      reporters: [
        {
          type: 'lcov',
          subdir: 'lcov'
        },
        {
          type: 'html',
          subdir: 'html'
        }
      ]
    },

    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
