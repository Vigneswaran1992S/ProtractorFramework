//export function

let homepageObj =  require('../pages/homepage');
//Scenario for jasmine framework
describe('demo calculator tests',function()
{
it('addition test',function(){
  
    homepageObj.get('http://juliemr.github.io/protractor-demo/');
    homepageObj.enterFirstNumber(3);
    homepageObj.enterSecondNumber(3);
    homepageObj.clickSubmitButton();
    homepageObj.verifyResult('6');
    
    
    
    
});
// element  = webelement
// element.all = list of webelements
it('subtraction test',function(){
    homepageObj.get('http://juliemr.github.io/protractor-demo/');
    homepageObj.enterFirstNumber(3);
    homepageObj.enterSecondNumber(3);
    homepageObj.clickSubmitButton();
    homepageObj.verifyResult('7');
    

    
//browser.driver.manage().window().setSize(1366, 728);
// URL: element(by.css('input[ng-model="first"]')).click();
// URL: element(by.css('input[ng-model="first"]')).clear().sendKeys('5');

// URL: element(by.css('select[ng-model="operator"]')).click();
// URL: element(by.css('select[ng-model="operator"]')).click();
// URL: element(by.css('input[ng-model="second"]')).click();
// URL: element(by.css('input[ng-model="second"]')).clear().sendKeys('5');
    // URL: element(by.css('button')).click();

})
});