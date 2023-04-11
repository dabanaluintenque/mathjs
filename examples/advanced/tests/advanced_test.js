// start webserver
require('../web_server/server')

const {Builder, By, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
const firefox = require('selenium-webdriver/firefox');

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

            urls.map(async (url)=> {
                await driver.get('http://localhost:8080/' + url);

                // check that runkit loaded
                let runkitWidget = await driver.findElement(By.name('runkit-embed-0'));

                assert.notEqual(runkitWidget, undefined)

                console.log("success for url " + url)
                console.log(runkitWidget)
            })
          });
    });
}, { browsers: [Browser.CHROME, Browser.FIREFOX]});


