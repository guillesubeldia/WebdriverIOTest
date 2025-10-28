import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'
import creds from '../data/credentials.json' assert { type: 'json' }

describe('UC-1 | Login with empty credentials.', () => {

  beforeEach(async () => {
    await LoginPage.open()
  })

  it('Wrong credentials', async () => {
    await LoginPage.setUsername(creds.wrong.username)
    await LoginPage.setPassword(creds.wrong.password)
    await browser.pause(2000)
    await LoginPage.clearFieldsChrome()
    await browser.pause(2000)
    await LoginPage.submit()
    const msg = await LoginPage.getErrorText()
    await browser.pause(2000)
    expect(msg).toContain('Epic sadface: Username is required')
  })
})

//Password vacío muestra error
// Feature: Login Swag Labs
  //   Scenario: Campo de password vacío
  //     Given el usuario está en la página de login
  //     When completa solo el campo de usuario con "test"
  //     And deja el campo de password vacío
  //     And presiona el botón "Login"
  //     Then el sistema muestra el mensaje "Epic sadface: Password is required"