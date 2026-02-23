import { expect } from "playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    constructor(page){
        super(page);
        this.username = this.page.locator('#user-name');
        this.password = this.page.locator('#password');
        this.loginBtn = this.page.locator('#login-button');
    }

    async login(user, pass){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL(/inventory/);
    }

}