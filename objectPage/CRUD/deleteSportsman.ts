import { protractor, ElementFinder, ElementArrayFinder, $, $$, browser} from 'protractor';

interface deleteSportsman {
    lastName: string;
    firstName: string;
    birth: string;
    middleName: string;
}

export class DeleteSportsman {
    buttonRed: ElementFinder;
    window: ElementFinder;
    deleteOk: ElementFinder;

    constructor() {
        this.buttonRed = $$('div.button').get(1)
        this.window = $('div.modal-content')
        this.deleteOk = $$('div button.btn.btn-success').get(1)
    }

    async seachDeleteSportsman(user: deleteSportsman, whereSeach){
        let whoSeach = user
        let i = ''
        let sportsman;
        let placeText;
        let boolText;
        for (i in whoSeach){
            sportsman = await whoSeach[i];
            placeText = await whereSeach[i].getAttribute('value')
            //await console.log(sportsman, placeText)
            if (sportsman != placeText) {
                return false
            } else {
                boolText = true
            }
        }
        return boolText
    }
    
    async delSp(boolSpMan){
        if( boolSpMan == true){
            await this.buttonRed.click()
            await this.deleteOk.click()
            await console.log('ok')
        }    
    }

    async notFind(selector){
        let EC = protractor.ExpectedConditions;
        return await browser.wait(EC.stalenessOf(selector), 2000)
    }
}