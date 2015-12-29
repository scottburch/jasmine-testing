var system = require('system');

console.log('running jasmine tests: ', system.args[1]);


/**
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */
function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 30001, //< Default Max Timeout is 30s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 100); //< repeat check every 100ms
};


if (system.args.length !== 2) {
    console.log('Usage: run-jasmine.js URL');
    phantom.exit(1);
}

var page = require('webpage').create();
page.settings.webSecurityEnabled = false;
page.settings.localToRemoteUrlAccessEnabled = true;


// Route "console.log()" calls from within the Page context to the main Phantom context (i.e. current "this")
page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open(system.args[1], function(status){
    if (status !== "success") {
        console.log("Unable to open " + system.args[1]);
        phantom.exit(1);
    } else {
        waitFor(function(){
            return page.evaluate(function(){
                return document.body.querySelector('.jasmine-alert > .jasmine-passed') !== null || document.body.querySelector('.alert > .failed') !== null;
            });
        }, function(){
            var exitCode = page.evaluate(function(){
                try {
                    console.log('');
                    var list = document.body.querySelectorAll('.spec-detail.failed');
                    if (list && list.length > 0) {
                        console.log('');
                        console.log(list.length + ' test(s) FAILED:');
                        for (i = 0; i < list.length; ++i) {
                            var el = list[i],
                                desc = el.querySelector('.description'),
                                msg = el.querySelector('.result-message');
                            console.log('---------------------------------------');
                            console.log(desc.innerText);
                            console.log(msg.innerText);
                            console.log('');
                        }
                        return 1;
                    } else {
                        var passed = document.body.querySelector('.jasmine-alert > .jasmine-passed');
                        console.log(passed.innerText);
                        return 0;
                    }
                } catch (ex) {
                    console.log(ex);
                    return 1;
                }
            });
            phantom.exit(exitCode);
        },50000);
    }
});