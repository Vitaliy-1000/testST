import { ElementFinder, $,$$, ElementArrayFinder } from 'protractor';

export class CreateSportsman {
    lastName: ElementFinder;
    firstName: ElementFinder;
    birth: ElementFinder;
    midleName: ElementFinder;
    //region: ElementFinder;
    selectorsForm: ElementArrayFinder;


    constructor() {
        this.lastName = $('[placeholder="Last name"]')
        this.firstName = $('[placeholder="First name"]')
        this.birth = $('[placeholder="Date of Birth"]')
        this.midleName = $('[placeholder="Middle name"]')
        
        //this.region = $('.form-control.select-ph.ng-invalid.ng-invalid-required.ng-touched')
        
        this.selectorsForm = $$('.form-control.select-ph.ng-invalid.ng-invalid-required.ng-touched')
        // selectors: 0-regions, 1-FST, 2-style, 3-age, 4-year
        
        
    
    
    }
}