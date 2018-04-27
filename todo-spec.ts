import { browser, element, by } from 'protractor';

import { LoginPage } from './objectPage/loginPage';
import { BasePage } from './objectPage/basePage';
import { start } from 'repl';


const loginPage = new LoginPage();
const basePage = new BasePage();

const user = {
    login: '',
    password: ''
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

        expect(await basePage.areDisplayed()).toEqual(true);

    })
})
