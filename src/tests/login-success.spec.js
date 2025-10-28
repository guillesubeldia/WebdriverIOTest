import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'
import creds from '../data/credentials.json' assert { type: 'json' }
//UC-3 | Login with correct credentials.

describe('Feature: Login Authentication', () => {
  describe('Scenario: Successful login with valid credentials', () => {
    // Given
    beforeEach(async () => {
      await LoginPage.open()
    })

    // When/Then
    it('should login successfully and show dashboard', async () => {
    await LoginPage.login({ username: creds.valid.username, password: creds.valid.password })
    await browser.pause(2000)
    const title = await LoginPage.getDashboardTitle()
    await browser.pause(2000)
    expect(title).toBe('Swag Labs')
  })
})
})
//Login válido navega al dashboard y muestra "Swag Labs"
  // Feature: Login Swag Labs
  //   Scenario: Inicio de sesión exitoso
  //     Given el usuario está en la página de login
  //     When completa el campo de usuario con "standard_user"
  //     And completa el campo de password con "secret_sauce"
  //     And presiona el botón "Login"
  //     Then el sistema navega al dashboard
  //     And muestra el título "Swag Labs"