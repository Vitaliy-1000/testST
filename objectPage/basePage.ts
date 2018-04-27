import { browser, element, ElementFinder, ElementArrayFinder, $, $$ } from 'protractor';

export class BasePage {
    inputSearch: ElementFinder;
    buttonSearch: ElementFinder;
    addNew: ElementFinder;
    selectNumber: ElementFinder;
    table: ElementFinder;

    constructor() {
        this.inputSearch = $('.form-control.ng-pristine.ng-valid.ng-touched')
        this.buttonSearch = $('.btn.btn-primary')
        this.addNew = $('[ng-click = "newWrestler()"]')
        this.selectNumber = $('.form-control.p-2.ng-pristine.ng-untouched.ng-valid')
        this.table = $('.table.table-striped.table-hover')
    }

    async areDisplayed() {
        let key = ''
        let areElem;
        for (key in this) {
            if (this[key].isDisplayed() == false){
                return false;
            } else {
                areElem = true;
            }
        }
        return areElem
    }

}