const BasePage = require("./basePage")

const SEEKBAR = {
    ANDROID: 'android=new UiSelector().resourceId("com.home.button.bottom:id/seekbar")',
    IOS: ""
}

const OK_BUTTON = {
    ANDROID: 'android=new UiSelector().resourceId("com.home.button.bottom:id/ok_textview")',
    IOS: ""
}

class ButtonWidthPopup {
    /**
     * define selectors using getter methods
     */
    get seekbar () { return BasePage.findElement(SEEKBAR) }
    get okButton () { return BasePage.findElement(OK_BUTTON) }


    setWidth(value){
        this.seekbar.setValue(value)
        this.okButton.click()
    }
}

module.exports = new ButtonWidthPopup();
