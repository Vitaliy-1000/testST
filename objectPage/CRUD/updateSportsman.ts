import { ElementFinder, ElementArrayFinder, $, $$, by, element } from 'protractor';

export class UpdateSportsman {
    tableRow: ElementFinder;
    selectUpd: ElementArrayFinder;
    constructor() {
        this.tableRow = $('tr.ng-scope')
        this.selectUpd = $$('select.ng-valid-required')
    }

    async updateSp() {
        await this.tableRow.click()
        let dfg = await this.selectUpd.$$('option').get(1).getText()
        await console.log(await dfg)
    }

}