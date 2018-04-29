import { ElementArrayFinder, ElementFinder, $$, $, element } from 'protractor';

export class PanelPrimary {
    panels: ElementArrayFinder;
    closeIt: ElementFinder;

    constructor(){
        this.panels = $$('div.panel.panel-primary')
        this.closeIt = $$('div.close-it span').get(1)
    
    }

    async arePrisent(selector){
        await console.log(await selector.count())
    }
}