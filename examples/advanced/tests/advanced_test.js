// start webserver
require('../web_server/server')

const {Builder, By, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
const firefox = require('selenium-webdriver/firefox');
const { time } = require('console');

const service = new firefox.ServiceBuilder('./geckodriver');
const driver = new Builder().forBrowser('firefox').setFirefoxService(service).build();


suite(function (env) {
    describe('Testing advanced examples', function () {
        let driver;

        before(async function () {
            driver = new Builder().forBrowser('firefox').setFirefoxService(service).build();
        });
    
        after(async () => await driver.quit());

        it('Selenium runkit tests', async function () {
            // test all urls
            const urls = ["convert_fraction_to_bignumber.js.html", "custom_argument_parsing.js.html", "custom_datatype.js.html", "custom_evaluate_using_import.js.html", "custom_evaluate_using_factories.js.html", "custom_relational_functions.js.html", "custom_loading.mjs.html"];

            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                await driver.get('http://localhost:8080/' + url);

                await driver.manage().setTimeouts({implicit: 500});

                await driver.findElement(By.name('runkit-embed-0')).then(function(webElement) {
                    console.log("success for url " + url)
                }, function(err) {
                    assert.fail('TEST FAILED: Runkit element not found on page, not loaded properly')
                });
            }
          });
    });
}, { browsers: [Browser.CHROME, Browser.FIREFOX]});


