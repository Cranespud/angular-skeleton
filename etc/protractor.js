exports.config = {
  allScriptsTimeout: 11000,

  baseUrl: 'http://localhost/angular-skeleton',
  keepAlive: false, // If false, the grunt process stops when the test fails.
  noColor: false, // If true, protractor will not use colors in its output.
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',

  framework: 'jasmine',

  specs: [
    '../app/test/e2e/**/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};