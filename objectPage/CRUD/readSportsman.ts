import { browser, element, protractor, by,  ElementFinder, ElementArrayFinder, $, $$ } from 'protractor';

export class ReadSportsman {
    inputSearch: ElementFinder;
    buttonSearch: ElementFinder;
    addNew: ElementFinder;
    selectNumber: ElementFinder;
    table: ElementFinder;
    tableRow: ElementFinder;

    constructor() {
        this.inputSearch = $('[ng-model="searchFor"]')
        this.buttonSearch = $('button.btn.btn-primary')
        this.addNew = $('[ng-click = "newWrestler()"]')
        this.selectNumber = $('.form-control.p-2.ng-pristine.ng-untouched.ng-valid')
        this.table = $('.table.table-striped.table-hover')
        this.tableRow = $('tr.ng-scope')
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
        await this.inputSearch.sendKeys(userLastName);
        await this.buttonSearch.click()
    }

    async seachText(text) {
        let td = await this.tableRow.$$('td').get(1).getText()
        //await console.log(await td)
        let regT = new RegExp(text, 'ig')
        //await console.log( await a)
        let boolText = await regT.test(td)
        return boolText
        // await console.log(await b)
        // let textBoolean = await td.indexOf(text)
        // if (textBoolean <= 0) {
        //     return true
        // } else {
        //     return false
        // }
    }

}