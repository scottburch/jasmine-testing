#!/usr/bin/env node

var express = require('express');
var phantomCmd = require('phantomjs-bin').path;
var childProcess = require('child_process');
var _ = require('lodash');
var app = express();
var server;


module.exports = {run: run};

var argv = require('minimist')(process.argv.slice(2));

const SERVER_PORT = 8000


module.parent || run().then(code => process.exit(code));


function run(opts) {
    return new Promise(resolve => {
    opts = _.defaults({}, opts, {root: process.cwd()});
    startWebServer({root: opts.root})
        .then(() => runJasmineTests(opts.root))
        .then(code => {
            server.close();
            resolve(code);
        });
    });
}


function runJasmineTests(root) {
    var url='http://localhost:8000/SpecRunner.html';
    var args = [];
    argv['debug-console'] === true && args.push('--remote-debugger-port=9001');
    args = args.concat([`${__dirname}/run-jasmine.js`, url]);
    return exec(phantomCmd, args, {cwd: root});
}


function startWebServer(opts) {
    return new Promise(resolve => {
        app.use(express.static(opts.root));

        server = app.listen(SERVER_PORT, () => {
            var host = server.address().address;
            var port = server.address().port;
            console.log('server listening at http://%s:%s', host, port);
            resolve();
        });
    })
}

function exec(cmd, args, opts) {
    return new Promise((resolve, reject) => {
        var p = childProcess.spawn(cmd, args, opts);

        p.on('error', err => console.log(err));

        p.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        p.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });

        p.on('close', function (code) {
            resolve(code);
        });
    });
};
