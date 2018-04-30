import { browser, element, by, protractor, $ } from 'protractor';

import { LoginPage } from './objectPage/loginPage';
import { CreateSportsman } from './objectPage/CRUD/createSportsman';
import { PanelPrimary } from './objectPage/CRUD/panelPrimary';
import { ReadSportsman } from './objectPage/CRUD/readSportsman';


const loginPage = new LoginPage();
const createSportsman = new CreateSportsman();
const panelPrimary = new PanelPrimary();
const readSportsman = new ReadSportsman();

const user = {
    login: '',
    password: ''
}

const newSportsman = {
    lastName: 'opn',
    firstName: 'onp',
    birth: '01-20-1998',
    middleName: 'lo',
    trainer: 'dan'
}


const startUrl = 'http://streamtv.net.ua/base/';
const baseUrl = startUrl;

describe('testST page', function(){

    beforeEach(async () => { 
        await browser.get(startUrl)
    
        expect(await browser.getCurrentUrl()).toEqual(loginPage.loginUrl);

        expect(await loginPage.loginForm.isDisplayed()).toEqual(true);

        await loginPage.userLogin(user);
        
        //expect(await browser.getCurrentUrl()).toEqual(baseUrl);

        expect(await readSportsman.arePresent()).toEqual(true);

        await readSportsman.addNew.click();
    });

    // afterEach(async () => {
    //     await
    // });


    it('create',async function(){
        
        await createSportsman.chooseOption(createSportsman.selectorsForm)
        await createSportsman.optionSelector(createSportsman.card)
        
        await createSportsman.userInfo(newSportsman)
    
        await createSportsman.buttonDone.click()

        //expect(await panelPrimary.areDisplayed(panelPrimary.panels)).toEqual(true)
        await browser.sleep(2000)
        await panelPrimary.closeIt.click()

        await readSportsman.seachSp(newSportsman.lastName)
        await browser.sleep(2000)
//         let EC = await protractor.ExpectedConditions;
// // Waits for an alert pops up.
//         await browser.wait(EC.alertIsPresent(), 5000);

        //await console.log( await $('tr.ng-scope').getText())

    })

    // it('read', async function(){
    //     //await console.log(await readSportsman.inputSearch.isPresent())
        
    // })
})
