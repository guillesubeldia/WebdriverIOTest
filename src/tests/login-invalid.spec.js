import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'
import creds from '../data/credentials.json' assert { type: 'json' }

describe('UC-2 | Login with invalid credentials', () => {

  beforeEach(async () => {
    await LoginPage.open()
  })

  it('Empty password', async () => {
    await LoginPage.setUsername(creds.wrong.username)
    await LoginPage.setPassword(creds.wrong.password)
    await browser.pause(2000)
    await LoginPage.clearPassword()
    await LoginPage.submit()
    await browser.pause(2000)
    const msg = await LoginPage.getErrorText()
    await browser.pause(2000)
    expect(msg).toContain('Epic sadface: Password is required')
  })
  })

//Credenciales inválidas muestran error
// Feature: Login Swag Labs
  //   Scenario: Credenciales incorrectas
  //     Given el usuario está en la página de login
  //     When completa el campo de usuario con "test"
  //     And completa el campo de password con "test"
  //     And presiona el botón "Login"
  //     Then el sistema muestra el mensaje "Epic sadface: Username and password do not match any user"