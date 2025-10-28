import { browser, $, expect } from '@wdio/globals'
import LoginPage from '../pages/login.page.js'

describe('Actividades', () => {
    it('Login empty credentials', async () => {
        await LoginPage.open()
        await LoginPage.typeUsername('test')
        await LoginPage.typePassword('test')
        await LoginPage.clearFields()
        await browser.pause(2000)
        // Intenta hacer login
        await LoginPage.clickLogin()
        // Espera a que aparezca el mensaje de error
        const errorMessage = await $('.error-message-container.error')
        await errorMessage.waitForDisplayed({ timeout: 3000 })
        // Obtiene y valida el texto del mensaje
        const text = await errorMessage.getText()
        console.log('Mensaje detectado:', text)

        expect(text).toContain(
            'Epic sadface: Username and password do not match any user in this service'
        )
        await browser.pause(2000)
    })

    it('Login witrh credentials, delete password', async () => {
        await LoginPage.open()
        await LoginPage.typeUsername('test')
        await LoginPage.typePassword('')
        await LoginPage.clearPassword()
        // Intenta hacer login
        await LoginPage.clickLogin()
        // Espera a que aparezca el mensaje de error
        const errorMessage = await $('.error-message-container.error')
        await errorMessage.waitForDisplayed({ timeout: 3000 })
        // Obtiene y valida el texto del mensaje
        const text = await errorMessage.getText()
        console.log('Mensaje detectado:', text)
        expect(text).toContain(
            'Password is required'
        )
        await browser.pause(2000)
    })

    it('Login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.typeUsername('standard_user')
        await LoginPage.typePassword('secret_sauce')
        await LoginPage.clickLogin()
        const dashboardTitle = await LoginPage.getDashboardTitle()
        expect(dashboardTitle).toBe('Swag Labs')
    })


})
