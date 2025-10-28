import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'
import creds from '../data/credentials.json' assert { type: 'json' }
//UC-3 | Login with correct credentials.

describe('Feature: Login Authentication', () => {
  describe('Scenario: Successful login with valid credentials', () => {
    // Given the user is on the login page
    beforeEach(async () => {
      await LoginPage.open()
    })

    // When/Then
    it('should login successfully and show dashboard', async () => {
    // When the user submits valid username and password
    await LoginPage.login({ 
        username: creds.valid.username,
        password: creds.valid.password 
    })
    await browser.pause(2000)
    // Then the dashboard should be displayed with the correct title
    const title = await LoginPage.getDashboardTitle()
    await browser.pause(2000)
    expect(title).toBe('Swag Labs')
  })
})
})
