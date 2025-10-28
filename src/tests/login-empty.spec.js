import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'
import creds from '../data/credentials.json' assert { type: 'json' }
//UC-1 | Login with empty fields.
describe('Feature: Login Field Validation', () => {
  describe('Scenario: Login attempt with empty fields', () => {
    // Given
    beforeEach(async () => {
      await LoginPage.open()
    })

    // When/Then
    it('should show error message when all fields are empty', async () => {
      // When - usuario ingresa credenciales y luego las borra
      await LoginPage.setUsername(creds.wrong.username)
      await LoginPage.setPassword(creds.wrong.password)
      await browser.pause(2000)
      await LoginPage.clearFieldsChrome()
      
      // When - intenta iniciar sesión
      await browser.pause(2000)
      await LoginPage.submit()
      
      // Then - debería ver mensaje de error
      const msg = await LoginPage.getErrorText()
      await browser.pause(2000)
      expect(msg).toContain('Epic sadface: Username is required')
  })
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