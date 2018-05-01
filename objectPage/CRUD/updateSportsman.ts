import { ElementFinder, ElementArrayFinder, $, $$, by, element, browser } from 'protractor';

export class UpdateSportsman {
    tableRow: ElementFinder;
    selectRegion: ElementFinder;
    selectFST:ElementFinder;

    buttonUpDone: ElementFinder;
    constructor() {
        this.tableRow = $('tr.ng-scope')
        this.selectRegion = $$('select.ng-valid-required').get(1)
        this.selectFST = $$('select.ng-valid-required').get(3)
        this.buttonUpDone = $$('div.button').get(0)
    }

    async updateSp(selector) {
        await selector.click()
        let valueString = await selector.getAttribute('value')
        
        let numbSt
        if(valueString == ''){
            numbSt = 0;
        } else {
            numbSt = await valueString.replace(/\D+/g,"")
        }

        let options = selector.$$('option')
        let optionsCount = await options.count() - 1 
        let randomNumb = await Math.floor(Math.random()* optionsCount) + 1
        
        //await console.log( valueString, optionsCount, randomNumb, numbSt)
        
        let downNumb;
        let upNumb;
        
        if (1 - randomNumb <= 1 || randomNumb != numbSt) {
            downNumb = await randomNumb - 1
        } else if(1 + randomNumb <= optionsCount || randomNumb != numbSt) {
            upNumb = await randomNumb + 1
        }
        
        //await console.log(downNumb, upNumb)
        
        if(downNumb == undefined) {
            await options.get(upNumb).click()
        } else {
            await options.get(downNumb).click()
        }
   
    }

}