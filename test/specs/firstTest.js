const LandingPage = require('../pageobjects/landingPage');
const ButtonWidthPopup = require('../pageobjects/buttonWidth');
const expect = require('chai').expect;


describe('My first test',  function() {

    before(function(){
        LandingPage.okButton.click()
    })

    it('Verify Button Width is set to 100', function(){
        LandingPage.buttonWidth.click()
        ButtonWidthPopup.setWidth("100")
        expect(LandingPage.buttonValue.getText()).to.eq("100 %")
    });
});


