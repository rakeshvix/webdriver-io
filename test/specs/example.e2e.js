const loginPage = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');
const securePage = require('../pageobjects/secure.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should log out',async () => {

        await loginPage.btnLogout.click();    
        await expect(SecurePage.flashAlert.toHaveTextContaining("You logged out of the secure area!"));

    });

});


