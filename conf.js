let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    browserName: 'chrome',
  },
  specs: ['spec.js'],
  onPrepare: function () {

    browser.ignoreSynchronization = true;


    jasmine.getEnv().addReporter(new SpecReporter({
    
      suite: {
        displayNumber: true,
      },
    }));
  }
};
