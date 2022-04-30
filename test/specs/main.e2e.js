const testve = require("../pageobjects/home.page");

describe('My Home page',  () => {

    it('check links in home page', async () => {

        browser.url('/');

        await testve.linksinpage.click();

        await expect(testve.linkinanotherpage).toHaveTextContaining('Elemental Selenium');


    });

});