class LoginPage {
    get inputUsername() { return $('//*[@data-test="username"]'); }
    get inputPassword() { return $('//*[@data-test="password"]'); }
    get btnLogin() { return $('//*[@data-test="login-button"]'); }
    get errorBox() { return $('//*[@data-test="error"]'); }


    async open() { await browser.url('/'); }
    async typeUsername(value) { await this.inputUsername.setValue(value); }
    async typePassword(value) { await this.inputPassword.setValue(value); }
    
    async clearFields() {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
    }

    async clearPassword() {
        await this.inputPassword.clearValue();
    }

    async clickLogin() { await this.btnLogin.click(); }

    async getDashboardTitle() {
        const title = await $('//*[@class="app_logo"]');
        await title.waitForDisplayed({ timeout: 3000 })
        return await title.getText()
    }


}

export default new LoginPage();
