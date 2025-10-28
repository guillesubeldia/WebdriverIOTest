import { $, browser } from '@wdio/globals'

class LoginPage {
  // Selectores estables (data-test)
  get inputUsername() { return $('//*[@data-test="username"]'); }
  get inputPassword() { return $('//*[@data-test="password"]') }
  get btnLogin()      { return $('//*[@data-test="login-button"]') }
  get errorBox()      { return $('//*[@data-test="error"]') }
  get appLogo()       { return $('//*[@class="app_logo"]') }

  // Navegación
  async open() {
    await browser.url('/')
    await this.inputUsername.waitForDisplayed({ timeout: 3000 })
  }

  // Acciones atómicas
  async setUsername(value) { await this.inputUsername.setValue(value) }
  async setPassword(value) { await this.inputPassword.setValue(value) }
  async submit()           { await this.btnLogin.click() }

  // Acción compuesta
  async login({ username = '', password = '' } = {}) {
    await this.setUsername(username)
    await this.setPassword(password)
    await this.submit()
  }

  // Lecturas
  async getErrorText() {
    await this.errorBox.waitForDisplayed({ timeout: 3000 })
    return this.errorBox.getText()
  }

  async getDashboardTitle() {
    await this.appLogo.waitForDisplayed({ timeout: 3000 })
    return this.appLogo.getText()
  }
}

export default new LoginPage()