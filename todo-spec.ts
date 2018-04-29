import { browser, element, by, protractor } from 'protractor';

import { LoginPage } from './objectPage/loginPage';
import { BasePage } from './objectPage/basePage';
//import { start } from 'repl';
import { CreateSportsman } from './objectPage/CRUD/createSportsman';
import { PanelPrimary } from './objectPage/CRUD/panelPrimary';


const loginPage = new LoginPage();
const basePage = new BasePage();
const createSportsman = new CreateSportsman();
const panelPrimary = new PanelPrimary();


const user = {
    login: '',
    password: ''
}

const newSportsman = {
    lastName: 'Voloh',
    firstName: 'Andriy',
    birth: '01-20-2000',
    middleName: 'Vitaliyovych',
    trainer: 'Zidan'
}


const startUrl = 'http://streamtv.net.ua/base/';
const baseUrl = startUrl;

describe('testST page', function(){

    it('CRUD',async function(){
        await browser.get(startUrl)
    
        expect(await browser.getCurrentUrl()).toEqual(loginPage.loginUrl);

        expect(await loginPage.loginForm.isDisplayed()).toEqual(true);

        await loginPage.userLogin(user);
        
        expect(await browser.getCurrentUrl()).toEqual(baseUrl);

        //expect(await basePage.areDisplayed()).toEqual(true);

        await basePage.addNew.click();
        
        await createSportsman.chooseOption(createSportsman.selectorsForm)
        await createSportsman.optionSelector(createSportsman.card)
        
        await createSportsman.userInfo(newSportsman)
    
        await createSportsman.buttonDone.click()
        
        //await console.log(panelPrimary.closeIt.isDisplayed())
        
        //await panelPrimary.arePrisent(panelPrimary.panels)
    })
})
