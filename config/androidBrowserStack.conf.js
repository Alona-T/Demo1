process.env.PLATFORM = "ANDROID"

exports.config = {

    runner: "local",
    
    user: process.env.BROWSERSTACK_USERNAME || 'company_nfjgJr',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'umZa6xNwZ2gxRX7FxgQh',


    specs: [
        './test/specs/**/*.js'
    ],

    services: [
        ['browserstack', {
            browserstackLocal: true,
            // host: 'http://company_nfjgJr:umZa6xNwZ2gxRX7FxgQh/hub-cloud.browserstack.com/wd/hub',
        }]
    ],

    capabilities: [{
        // 'name': 'single_appium_test_webdriverio',
        // 'build': 'WebDriverIO Android',
        // 'project': 'WebDriverIO Mocha',
        'appium:deviceName': 'Samsung Galaxy S20 Plus',
        'appium:platformVersion': "10.0",
        'platformName': 'Android',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'bs://4882427382e70369fc2f0433a9e6327ba1fc118c',
        // 'appActivity': 'youractivity', //if required
        // 'appPackage': 'your package', //if required
        'appium:browserstack.debug': true,
        "appium:browserstack.appium_version" : "1.21.0",
        'appium:browserstack.local': true,
        'appium:autoGrantPermissions': true
      }],

      
    

}