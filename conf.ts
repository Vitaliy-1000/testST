
import{Config, browser} from "protractor";
//const { Config} = require('protractor')

let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let currentDatePath = "report " + new Date();
const config : Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.ts'],

    SELENIUM_PROMISE_MANAGER: false,
    allScriptsTimeout: 120000,
    getMultiCapabilities: 60000,
    onPrepare() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: "./reports/" + currentDatePath + "/",
          screenshotsFolder: "screenshots"
        })
      );

      browser.waitForAngularEnabled(true);
    },

    jasmineNodeOpts: {
      showColors: true,
     defaultTimeoutInterval: 300000
    }


  };

  exports.config = config;