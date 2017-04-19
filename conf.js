'use strict';


exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.myhcl.com/Login/home.aspx',
  capabilities: {
    browserName: 'chrome'
  },
  suites: {
    fill: ['./fill.js'],
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    var width = 1425;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);
    require('babel-register');
  }
};
