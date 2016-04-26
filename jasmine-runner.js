#!/usr/bin/env node

var phantomCmd = require('phantomjs-bin').path;
var childProcess = require('child_process');

module.exports = {run: run};

var argv = require('minimist')(process.argv.slice(2));

module.parent || run().then(code => process.exit(code));


function run() {
    return new Promise(resolve =>
        runJasmineTests(process.cwd()).then(resolve)
    );
}


function runJasmineTests(root) {
    var args = [`${__dirname}/run-jasmine.js`, `${root}/SpecRunner.html`];
    if(argv['debug']) {
        args = ['--remote-debugger-port=9001'].concat(args).concat('--debug');
        console.log('*************************************************************************************');
        console.log('open a browser and go to http://localhost:9001/webkit/inspector/inspector.html?page=1');
        console.log('in the console, type "__run()"');
        console.log('*************************************************************************************');
    } else {
        console.log('**************************************************************');
        console.log('To run the tests in debug mode add "-- --debug" to the command');
        console.log('**************************************************************');
    }
    return exec(phantomCmd, args, {cwd: root});
}

function exec(cmd, args, opts) {
    return new Promise((resolve, reject) => {
        var p = childProcess.spawn(cmd, args, opts);

        p.on('error', err => console.log(err));

        p.stdout.on('data', data => console.log(data.toString()));

        p.stderr.on('data', data => console.log(data.toString()));

        p.on('close', resolve);
    });
};
