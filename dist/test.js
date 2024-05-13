"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
const chai_1 = require("chai");
const mocha_1 = require("mocha");
(0, mocha_1.describe)('Example Test Suite', () => {
    let driver;
    (0, mocha_1.before)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            try {
                const chromeOptions = new chrome_1.Options().addArguments('--headless');
                driver = yield new selenium_webdriver_1.Builder()
                    .forBrowser('chrome')
                    .setChromeOptions(chromeOptions)
                    .build();
            }
            catch (error) {
                console.error('Error initializing WebDriver:', error);
                throw error;
            }
        });
    });
    (0, mocha_1.it)('should open Google homepage', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            try {
                yield driver.get('https://www.google.com');
                yield driver.wait(selenium_webdriver_1.until.titleIs('Google'), 1000);
                const title = yield driver.getTitle();
                (0, chai_1.expect)(title).to.equal('Google');
                console.log(title);
            }
            catch (error) {
                console.error('Error opening Google homepage:', error);
                throw error;
            }
        });
    });
    (0, mocha_1.after)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            if (driver) {
                try {
                    yield driver.quit();
                }
                catch (error) {
                    console.error('Error quitting WebDriver:', error);
                    throw error;
                }
            }
        });
    });
});
