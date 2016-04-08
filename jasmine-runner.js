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
    argv['debug-console'] === true && args.push('--remote-debugger-port=9001');
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
