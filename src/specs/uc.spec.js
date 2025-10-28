import { expect } from '@wdio/globals'
import LoginPage from '../pages/loginPom.page.js'

describe('UC | Login Swag Labs', () => {

  beforeEach(async () => {
    await LoginPage.open()
  })

  it('Password vacío muestra error', async () => {
    await LoginPage.setUsername('test')
    await LoginPage.submit()
    const msg = await LoginPage.getErrorText()
    expect(msg).toContain('Epic sadface: Password is required')
  })

  it('Credenciales inválidas muestran error', async () => {
    await LoginPage.login({ username: 'test', password: 'test' })
    const msg = await LoginPage.getErrorText()
    expect(msg).toContain('Epic sadface: Username and password do not match any user')
  })

  it('Login válido navega al dashboard y muestra "Swag Labs"', async () => {
    await LoginPage.login({ username: 'standard_user', password: 'secret_sauce' })
    const title = await LoginPage.getDashboardTitle()
    expect(title).toBe('Swag Labs')
  })
})