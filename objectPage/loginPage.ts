import { browser, ElementFinder, $ } from 'protractor';

interface user{
    login: string,
    password: string
}


export class LoginPage {
    loginForm: ElementFinder;
    login: ElementFinder;
    password: ElementFinder;
    loginUrl: string;
    loginButton: ElementFinder;

    constructor() {
        this.loginForm = $('.panle-body.login-form')
        this.login = $('[placeholder = Login]')
        this.password = $('[placeholder = Password]')
        this.loginUrl = 'http://streamtv.net.ua/base/login'
        this.loginButton = $('.btn.btn-primary.pull-right')
    }

    async userLogin(user: user){
        await this.login.sendKeys(user.login);
        await this.password.sendKeys(user.password);
        await this.loginButton.click();
    }

}