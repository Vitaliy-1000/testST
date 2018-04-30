import { browser, element, protractor, by,  ElementFinder, ElementArrayFinder, $, $$ } from 'protractor';

export class ReadSportsman {
    inputSearch: ElementFinder;
    buttonSearch: ElementFinder;
    addNew: ElementFinder;
    selectNumber: ElementFinder;
    table: ElementFinder;

    constructor() {
        this.inputSearch = $('[ng-model="searchFor"]')
        this.buttonSearch = $('button.btn.btn-primary')
        this.addNew = $('[ng-click = "newWrestler()"]')
        this.selectNumber = $('.form-control.p-2.ng-pristine.ng-untouched.ng-valid')
        this.table = $('.table.table-striped.table-hover')
    }

    async arePresent() {
        let key = ''
        let areElem;
        for (key in this) {
            if (this[key].isPresent() == false){
                return false;
            } else {
                areElem = true;
            }
        }
        return areElem
    }

    async seachSp(userLastName){
        let EC = await protractor.ExpectedConditions;

        
        await this.inputSearch.sendKeys(userLastName);
        await browser.wait(EC.visibilityOf(this.buttonSearch), 5000);
        await this.buttonSearch.click()
    }
}