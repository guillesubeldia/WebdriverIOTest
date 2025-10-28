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

async clearPassword() { 
    
    // 1. Determinar el sistema operativo para la tecla "Seleccionar Todo"
    const isMac = (await browser.execute(() => navigator.platform)).includes('Mac');
    const selectAllKey = isMac ? 'Meta' : 'Control'; // 'Meta' es el Command Key

    // 2. Obtener el nombre del navegador
    const browserName = browser.capabilities.browserName;

    if (browserName === 'chrome') {
      
        //Ejecutando clearPassword: Método de simulación Ctrl+A + Delete (Chrome Workaround).'
        const passwordEl = await this.inputPassword; // Resolver el elemento
        // 3. Aplicar la simulación de borrado
        await passwordEl.click(); // Enfocar el campo
        // Seleccionar todo el contenido (Ctrl + A o Cmd + A)
        await browser.keys([selectAllKey, 'a']); 
        // Borrar el contenido seleccionado
        await browser.keys(['Delete']);
        // Pausa mínima opcional
        await browser.pause(50);

    } else {
        // Lógica original para Firefox y otros navegadores
        console.log(`Ejecutando clearPassword: Método estándar/doble clear para ${browserName}.`);
        await this.inputPassword.clearValue() 
        // Doble clear de respaldo, por si clearValue() falla
        await this.inputPassword.setValue(''); 
    }
  }
  async clearFields() { 
        //en firefox a veces no limpia bien los campos, por eso se hace doble clear
    await this.inputUsername.setValue('');
    await this.inputPassword.setValue('');

    await this.inputUsername.clearValue()
    await this.inputPassword.clearValue()
  }

  async clearFieldsChrome(){ 
    // Opcional: Obtener el sistema operativo si se necesita el Command Key (macOS)
    const isMac = (await browser.execute(() => navigator.platform)).includes('Mac');
    const selectAllKey = isMac ? 'Meta' : 'Control'; // 'Meta' es el Command Key

    const browserName = browser.capabilities.browserName;

    if (browserName === 'chrome') {
        //ejecute el comando de teclado para seleccionar todo y borrar, porque el clearValue a veces no funciona bien en Chrome
        const usernameEl = await this.inputUsername;
        const passwordEl = await this.inputPassword;
        
        const inputs = [usernameEl, passwordEl];
        
        for (const el of inputs) {
            // 1. Clic para enfocar el elemento
            await el.click();
            // 2. Seleccionar todo el contenido (Ctrl + A o Cmd + A)
            await browser.keys([selectAllKey, 'a']); 
            // 3. Borrar el contenido seleccionado
            await browser.keys(['Delete']);
            // Opcional: Pausa mínima para permitir que el framework reaccione
            await browser.pause(50);
        }
    
    } else if (browserName === 'firefox') {
        // Mantenemos tu lógica original de respaldo para Firefox
        console.log('Ejecutando clearFields para Firefox.');
        await this.inputUsername.setValue('');
        await this.inputPassword.setValue('');
        await this.inputUsername.clearValue()
        await this.inputPassword.clearValue()
    } else {
        // Lógica genérica para otros navegadores
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
        await this.inputUsername.setValue('');
        await this.inputPassword.setValue('');
    }
}

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