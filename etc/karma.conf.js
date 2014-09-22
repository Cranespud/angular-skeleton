// Karma configuration
// Generated with karma init
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../app', // relative to this file's location

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
   files: [
      'test/unit/test-main.js', // this one should be included in an script tag
      {pattern: 'src/js/**/*.js', included: false},
      {pattern: 'src/js/**/*.html', included: false},
      {pattern: 'test/unit/**/*.spec.js', included: false},
      {pattern: 'lib/**/*.js', included: false},
      {pattern: 'etc/**/*.conf.js', included: false},
   ],

    // list of files to exclude
    exclude: [
        'lib/**/test/**/*.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/src/**/*.js': ['coverage']
    },

    // generate coverage info
    coverageReporter: {
        type: 'html',
        dir: '../var/coverage'
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
