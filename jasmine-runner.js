#!/usr/bin/env node

var express = require('express');
var phantomCmd = require('phantomjs-bin').path;
var childProcess = require('child_process');
var _ = require('lodash');
var app = express();
var server;



const SERVER_PORT = 8000

module.exports = {run: run};

module.parent || run({root: process.argv[2]}).then(code => process.exit(code));


function run(opts) {
    return new Promise(resolve => {
    opts = _.defaults({}, opts, {root: process.cwd()});
    startWebServer({root: opts.root})
        .then(() => runJasmineTests(opts.root))
        .then(code => {
            server.close();
            resolve(code);
        });
    })
}

function runJasmineTests(root) {
    var url='http://localhost:8000/SpecRunner.html';
    return exec(phantomCmd, [`${__dirname}/run-jasmine.js`, url], {cwd: root});
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
