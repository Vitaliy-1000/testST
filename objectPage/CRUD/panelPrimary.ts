import { ElementArrayFinder, ElementFinder, $$, $, element } from 'protractor';

export class PanelPrimary {
    panels: ElementArrayFinder;
    closeIt: ElementFinder;

    constructor(){
        this.panels = $$('div.panel.panel-primary')
        this.closeIt = $$('div.close-it span').get(1)
    
    }

    async areDisplayed(selector){
        let countSel = await selector.count()
        let i
        let areElem
        for (i=0; i < countSel; i++){
            let get = await selector.get(i).isDisplayed()
        
            if (await get != false) {
                areElem = true
            } else {
                return false
            }
        }
        
        return areElem
    }
}