import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'
import creds from '../data/credentials.json' assert { type: 'json' }
//UC-2 | Login with invalid credentials: empty password.
describe('Feature: Login Validation', () => {
  describe('Scenario: Login attempt with empty password', () => {
    // Given the user is on the login page
    beforeEach(async () => {
      await LoginPage.open()
    })

    // When/Then
    it('should show error message for empty password', async () => {
    // When the user enters a username but leaves the password field empty
    await LoginPage.setUsername(creds.wrong.username)
    await LoginPage.setPassword(creds.wrong.password)
    await browser.pause(2000)
    await LoginPage.clearPassword()
    await LoginPage.submit()
    // Then an error message should be displayed indicating that password is required
    await browser.pause(2000)
    const msg = await LoginPage.getErrorText()
    await browser.pause(2000)
    expect(msg).toContain('Epic sadface: Password is required')
  })
  })
})
