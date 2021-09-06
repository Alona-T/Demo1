const BasePage = require("./basePage");

const OK_BUTTON = {
    ANDROID: 'android=new UiSelector().resourceId("com.home.button.bottom:id/bubble")',
    IOS: ""
}

const BUTTON_WIDTH = {
    ANDROID: 'android=new UiSelector().resourceId("com.home.button.bottom:id/button_width_layout")',
    IOS: ""
}

const BUTTON_VALUE = {
    ANDROID: 'android=new UiSelector().resourceId("com.home.button.bottom:id/button_width_subtitle_textview")',
    IOS: ""
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage {
    /**
     * define selectors using getter methods
     */
    get okButton() { return BasePage.findElement(OK_BUTTON)}
    get buttonWidth() { return BasePage.findElement(BUTTON_WIDTH)}
    get buttonValue() { return BasePage.findElement(BUTTON_VALUE)}
}

module.exports = new LandingPage();
