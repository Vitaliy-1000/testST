import { browser, element, by, protractor, $ } from 'protractor';

import { LoginPage } from './objectPage/loginPage';
import { CreateSportsman } from './objectPage/CRUD/createSportsman';
import { PanelPrimary } from './objectPage/panelPrimary';
import { ReadSportsman } from './objectPage/CRUD/readSportsman';
import { UpdateSportsman } from './objectPage/CRUD/updateSportsman';
import { DeleteSportsman } from './objectPage/CRUD/deleteSportsman';

const loginPage = new LoginPage();
const createSportsman = new CreateSportsman();
const panelPrimary = new PanelPrimary();
const readSportsman = new ReadSportsman();
const updateSportsman = new UpdateSportsman();
const deleteSportsman = new DeleteSportsman();

const user = {
    login: 'auto',
    password: 'test'
}

const newSportsman = {
    lastName: 'лрпр',
    firstName: 'овпов',
    birth: '01-20-1998',
    middleName: 'впово'
    //trainer: 'dan'
}


const fake = {
    lastName: 'орпоа',
    firstName: 'прлрпл',
    birth: '10-12-2000',
    middleName: 'аыпо'
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

        await browser.takeScreenshot()

        //await panelPrimary.closeIt.click()
    })
  
    it('read', async function(){
        await readSportsman.seachSp('орпоа')    //newSportsman.lastName
        expect(await readSportsman.seachText('орпоа')).toEqual(true)    //newSportsman.lastName
        await browser.takeScreenshot()
    })

    it('update', async function(){
        await readSportsman.seachSp('орпоа') //newSportsman.lastName
        await updateSportsman.tableRow.click()

        expect(await panelPrimary.areDisplayed(panelPrimary.panels)).toEqual(true)
        
        await updateSportsman.updateSp(updateSportsman.selectRegion)
        await updateSportsman.updateSp(updateSportsman.selectFST)
        await updateSportsman.buttonUpDone.click()
        
        await browser.takeScreenshot()
    })

    it('delete', async function(){
        await readSportsman.seachSp('орпоа')    //newSportsman.lastName
        await updateSportsman.tableRow.click()
        await browser.sleep(1500)
        let boolText = await deleteSportsman.seachDeleteSportsman(fake, createSportsman)     //newSportsman
        
        await deleteSportsman.delSp(boolText)

        await readSportsman.seachSp('орпоа')     //newSportsman.lastName
        
        await browser.sleep(1500)

        expect(await deleteSportsman.notFind(readSportsman.tableRow)).toEqual(true)
        
        await browser.takeScreenshot()
    })
})
