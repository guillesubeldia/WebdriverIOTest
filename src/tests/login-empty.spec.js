import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'
import creds from '../data/credentials.json' assert { type: 'json' }
//UC-1 | Login with empty fields.
describe('Feature: Login Field Validation', () => {
  describe('Scenario: Login attempt with empty fields', () => {
    // Open the login page before each test
    beforeEach(async () => {
      await LoginPage.open()
    })

    // When/Then
    it('should show error message when all fields are empty', async () => {
      // when - Enter invalid credentials first, then clear both fields
      await LoginPage.setUsername(creds.wrong.username)
      await LoginPage.setPassword(creds.wrong.password)
      await browser.pause(2000)
      await LoginPage.clearFieldsChrome()
      
      // When - Attempt to log in with empty fields
      await browser.pause(2000)
      await LoginPage.submit()
      
      // Then - Verify that the correct error message is displayed
      const msg = await LoginPage.getErrorText()
      await browser.pause(2000)
      expect(msg).toContain('Epic sadface: Username is required')
  })
})
})

