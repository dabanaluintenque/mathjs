const web = require('../advanced/web_server/server')
const {Builder, By, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
const firefox = require('selenium-webdriver/firefox');
const { time } = require('console');
const path = require('path')


const service = new firefox.ServiceBuilder('./geckodriver');
const options = new firefox.Options();

suite(function (env) {
    describe('Testing advanced examples', function () {
        let driver;

        before(async function () {
            driver = new Builder().forBrowser('firefox').setFirefoxService(service).setFirefoxOptions(options.addArguments('--headless')).build();
        });
    
        after(async () => {
            await driver.quit()
        });

        it('Selenium Runkit Basic Demo Tests', async function () {
            // test all urls of non-runkit tests!
            const local = [
                "Fractions.html",
                "Import.html",
                "Index.html",
                "Matrices.html",
                "Object.html",
                "Serialization.html",
                "SparseMatrices.html",
                "Units.html"
            ];

            for (let i = 0; i < local.length; i++) {
                const url = path.join(__dirname, '..', 'browser', 'sprint2', 'browser', local[i])
                await driver.get('file:///' + url);

                let title = await driver.getTitle();

                if (!title.includes("Sprint 2 project")) {
                    assert.fail('TEST FAILED: Proper title not found, not correct demo. Found: ' + title)
                }
                console.log("success for url " + url)

            }

            const remoteURLs = [
                "algebra.js.html",
                "basic_usage.js.html",
                "bignumbers.js.html",
                "chaining.js.html",
                "complex_numbers.js.html",
                "expressions.js.html"
            ]

            for (let i = 0; i < remoteURLs.length; i++) {
                const url = remoteURLs[i];
                await driver.get('http://localhost:8080/' + url);

                await driver.manage().setTimeouts({implicit: 500});

                await driver.findElement(By.name('runkit-embed-0')).then(function(webElement) {
                    console.log("success for url " + url)
                }, function(err) {
                    assert.fail('TEST FAILED: Runkit element not found on page, not loaded properly')
                });
            }

            web.Stop();
          });
    });
}, { browsers: [Browser.FIREFOX]});


