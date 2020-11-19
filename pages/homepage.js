let homepage= function(){


    let firstNumber= element(by.model('first'));

    let secondNumber=element(by.model('second'));

     let submitButton=element(by.css('[ng-click="doAddition()"]'));

     this.get = function(url){
        browser.get(url);
     };

     this.enterFirstNumber=function(firstNum){
            firstNumber.sendKeys(firstNum);
     };
     this.enterSecondNumber=function(secondNum){
            secondNumber.sendKeys(secondNum);
     };
     this.clickSubmitButton=function(){
            submitButton.click();
     };

     this.verifyResult= function(result){
        let output=element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
     
     };
};

module.exports= new homepage();