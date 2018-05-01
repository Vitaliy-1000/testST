import { ElementFinder, $, $$, ElementArrayFinder, by, element } from 'protractor';

interface newSportsman {
    lastName: string;
    firstName: string;
    birth: string;
    middleName: string;
    //trainer: string;
}



export class CreateSportsman {
    lastName: ElementFinder;
    firstName: ElementFinder;
    birth: ElementFinder;
    middleName: ElementFinder;
    //trainer: ElementFinder;

    selectorsForm: ElementArrayFinder;
    card: ElementFinder;
    
    buttonDone: ElementFinder;
    constructor() {
        this.lastName = $('[placeholder="Last name"]')
        this.firstName = $('[placeholder="First name"]')
        this.birth = $('[placeholder="Date of Birth"]')
        this.middleName = $('[placeholder="Middle name"]')
        //this.trainer = $$('[placeholder="Trainer"]').get(0)
        
        this.selectorsForm = $$('div.grouped select.ng-invalid')
        // selectors: 0-regions, 1-FST, 2-style, 3-age, 4-year

        this.card = $('div.grouped select.ng-pristine')

        this.buttonDone = $('button.btn.btn-lg.btn-success')
      }

    async chooseOption(selectors){
        let lists = selectors;
        const listCount = await selectors.count()
    
        for(let i = 0; i < listCount; i++) {
          
          let list = await lists.get(0)
          await list.click()
          
          let options = list.$$('option')
          let optionCount = await options.count() - 1

          let random = await Math.floor(Math.random() * optionCount) + 1;
          let optRand = await options.get(random)
          await optRand.click()
         
        }
    }

    async optionSelector(selector) {
      await selector.click()
      let options = selector.$$('option')
      let optionCount = await options.count() - 1
      
      let random = await Math.floor(Math.random() * optionCount) + 1
      let optRand = await options.get(random)
      await optRand.click()
    }

    async userInfo(user: newSportsman){
      let i = ''
      for (i in user){
        await this[i].sendKeys(user[i])
      }
    }

}