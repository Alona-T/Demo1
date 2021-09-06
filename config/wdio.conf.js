process.env.PLATFORM = "ANDROID"

exports.config = {



    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
 
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //


    capabilities: [{
            platformName: 'Android',
            maxInstances: 1,
            app: '/Users/alona/Projects/Demo1/app/Multi-action_Home_Button_base.apk',
            automationName: 'UIAutomator2',
            appium_version: "1.20.2",
          }],



    logLevel: 'trace',

    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    
    services: ['appium'],
    port: 4723, // default appium port
    host: "0.0.0.0",

    framework: 'mocha',

    reporters: ['spec',
        //Capture video for each test if failed
        ['allure', {
            outputDir: 'allure-report',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
      ],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

     before: function() {
        const chai    = require('chai');
        global.expect = chai.expect;
    },

    afterTest: function(test){
        if (test.error !== undefined) {
            browser.takeScreenshot();
          }
    }
}
