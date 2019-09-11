const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('Go to insta page', function () {
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    it('Go to page', async function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.instagram.com/');
        browser.sleep(3000);
        await element(by.css('#react-root > section > main > article > div.rgFsT > div:nth-child(2) > p > a')).click();
        let currentUrl = browser.getCurrentUrl().then(function (text) {
            return expect(text).to.equal("https://www.instagram.com/accounts/login/?source=auth_switcher");
        });
    });

    it('Login as a user', async function () {
        browser.sleep(3000);
        // Enter your email here
        await element(by.css('div:nth-child(1) div:nth-child(2) > div > label > input')).sendKeys('*******');
        browser.sleep(1000);
        // Enter your password here
        await element(by.css('div:nth-child(1) div:nth-child(3) input')).sendKeys('********');
        browser.sleep(1000);
        await element(by.css('div:nth-child(1) div:nth-child(4) > button > div')).click();
        browser.sleep(3000);
    });
    it('Go to page with tag Uzhhorod', async function () {
        browser.sleep(3000);
        await browser.get('https://www.instagram.com/explore/tags/uzhhorod/');
        let tag = await element(by.css('h1')).getText();
        // console.log(tag);
        return expect(tag).to.equal('#uzhhorod');
    });

    it('Takes newest photos and puts likes on them', async function () {
        browser.sleep(3000);
        await  element(by.css('div:nth-child(3) div:nth-child(1) > div:nth-child(1) > a > div.eLAPa > div._9AhH0')).click();
        browser.sleep(2000);
        let ec = protractor.ExpectedConditions;
        let ele = await element(by.css('.fr66n > button'));

        for (let i = 0; i < 1; i++) {
            browser.wait(ec.visibilityOf(ele), 30000, i.toString());
            await element(by.css('.fr66n > button')).click();
            element(by.css('a.HBoOv.coreSpriteRightPaginationArrow')).click();
            browser.sleep(1000)
        }
    });
});