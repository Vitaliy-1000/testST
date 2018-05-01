import { browser, element, by, protractor, $ } from 'protractor';

import { LoginPage } from './objectPage/loginPage';
import { CreateSportsman } from './objectPage/CRUD/createSportsman';
import { PanelPrimary } from './objectPage/CRUD/panelPrimary';
import { ReadSportsman } from './objectPage/CRUD/readSportsman';
import { UpdateSportsman } from './objectPage/CRUD/updateSportsman';

const loginPage = new LoginPage();
const createSportsman = new CreateSportsman();
const panelPrimary = new PanelPrimary();
const readSportsman = new ReadSportsman();
const updateSportsman = new UpdateSportsman();

const user = {
    login: 'auto',
    password: 'test'
}

const newSportsman = {
    lastName: 'лрпр',
    firstName: 'овпов',
    birth: '01-20-1998',
    middleName: 'впово',
    //trainer: 'dan'
}


const startUrl = 'http://streamtv.net.ua/base/';
const baseUrl = startUrl;

describe('testST page', function(){

    beforeEach(async () => { 
        await browser.get(startUrl)
    
        expect(await browser.getCurrentUrl()).toEqual(loginPage.loginUrl);

        expect(await loginPage.loginForm.isDisplayed()).toEqual(true);

        await loginPage.userLogin(user);
        
        expect(await browser.getCurrentUrl()).toEqual(baseUrl);

        expect(await readSportsman.arePresent()).toEqual(true);

        
    });

    // afterEach(async () => {
    //     await
    // });


    it('create',async function(){
        await readSportsman.addNew.click();
        
        await createSportsman.chooseOption(createSportsman.selectorsForm)
        await createSportsman.optionSelector(createSportsman.card)
        await createSportsman.userInfo(newSportsman)
    
        await createSportsman.buttonDone.click()

        await panelPrimary.closeIt.click()
    })
/*  
    it('read', async function(){
        await readSportsman.seachSp(newSportsman.lastName)

        await browser.sleep(2000)
        //expect(await readSportsman.seachText(newSportsman.lastName)).toEqual(true)

    })
/*
    it('update', async function(){
        await readSportsman.seachSp('орпоа')
        await updateSportsman.tableRow.click()

        expect(await panelPrimary.areDisplayed(panelPrimary.panels)).toEqual(true)
        
        await updateSportsman.updateSp(updateSportsman.selectRegion)
        await updateSportsman.updateSp(updateSportsman.selectFST)
        await updateSportsman.buttonUpDone.click()
        await browser.sleep(1500)
    })*/
})
