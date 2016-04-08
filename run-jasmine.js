var system = require('system');
var TEST_TIMEOUT = 120000;

console.log('running jasmine tests: ', system.args[1]);


if (system.args.length !== 2) {
    console.log('Usage: run-jasmine.js URL');
    phantom.exit(1);
}

var page = require('webpage').create();
page.settings.webSecurityEnabled = false;
page.settings.localToRemoteUrlAccessEnabled = true;


// Route "console.log()" calls from within the Page context to the main Phantom context (i.e. current "this")
page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.onError = function (msg, trace) {
    console.log('ERROR:', msg);
    trace.forEach(function (item) {
        console.log('  ', item.file, ':', item.line);
    });
};

page.open(system.args[1], function (status) {
    status === "success" ? waitForTestResults() : openPageError();


    function openPageError() {
        console.log("Unable to open " + system.args[1]);
        phantom.exit(1);
    }

    function waitForTestResults() {

        /*
         if(system.args[2] === 'debug') {
         debugger; // pause here in first web browser tab on step 5
         page.evaluateAsync(function () {
         debugger; // step 9 will wait here in the second web browser tab
         });
         }
         */
        var start = new Date().getTime();
        waitFor(resultsReady, displayResults, TEST_TIMEOUT);


        function resultsReady() {
            return page.evaluate(function () {
                return ['jasmine-passed', 'jasmine-failed', 'jasmine-skipped'].some(function (cls) {
                    return document.body.querySelector('.jasmine-alert > .' + cls) !== null
                });
            });
        }


        function displayResults() {
            console.log('Time to run tests: ' + (new Date().getTime() - start)/1000 + ' seconds') ;
            phantom.exit(page.evaluate(scrapeResults));


            function scrapeResults() {
                var errorList = document.body.querySelectorAll('.jasmine-spec-detail.jasmine-failed');
                var passed = document.body.querySelector('.jasmine-alert > .jasmine-passed');
                var skipped = document.body.querySelector('.jasmine-alert > .jasmine-skipped');
                if (errorList && errorList.length) {
                    Array.prototype.slice.call(errorList).forEach(function (el) {
                        console.log('---------------------------------------');
                        console.log(el.querySelector('.jasmine-failed a').innerText);
                        console.log(el.querySelector('.jasmine-result-message').innerText);
                    });
                    console.log(errorList.length + ' test(s) FAILED:');
                    return 1;
                } else if (passed) {
                    console.log(passed.innerText);
                    return 0;
                } else if (skipped) {
                    console.log(skipped.innerText);
                    return 1;
                } else {
                    console.log('Unknown test results - run-jasmine.js file could not read output');
                    return 1;
                }
            }
        }
    }
});

function waitFor(testFx, onReady, timeOutMillis) {
    var start = new Date().getTime();

    (function loop() {
        testFx() ? onReady() : checkTimeout();

        function checkTimeout() {
            new Date().getTime() - start < timeOutMillis ? setTimeout(loop, 1000) : timeoutError();
        }

        function timeoutError() {
            console.log('Error: Tests did not complete in ' + timeOutMillis / 1000 + ' seconds');
            phantom.exit(1);
        }
    }());
}
