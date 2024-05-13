import {Builder, By, Key, until} from 'selenium-webdriver';
import {Options} from 'selenium-webdriver/chrome';
import {expect} from 'chai';
import {describe, it, before, after} from 'mocha';

describe('Example Test Suite', () => {
    let driver: any;

    before(async function() {
        this.timeout(10000);
        try {
            const chromeOptions = new Options().addArguments('--headless');
            driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(chromeOptions)
                .build();
        } catch (error) {
            console.error('Error initializing WebDriver:', error);
            throw error;
        }
    });

    it('should open Google homepage', async function() {
        this.timeout(10000);
        try {
            await driver.get('https://www.google.com');
            await driver.wait(until.titleIs('Google'), 1000);
            const title = await driver.getTitle();
            expect(title).to.equal('Google');
            console.log(title);
        } catch (error) {
            console.error('Error opening Google homepage:', error);
            throw error;
        }
    });

    after(async function() {
        this.timeout(10000);
        if (driver) {
            try {
                await driver.quit();
            } catch (error) {
                console.error('Error quitting WebDriver:', error);
                throw error;
            }
        }
    });

});