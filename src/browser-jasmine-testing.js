require('./lib/jasmine-2.3.4/jasmine.css');
require('es5-shim');
var scripts = [
    require('source-map-support/browser-source-map-support.js'),
    require('./lib/jasmine-2.3.4/jasmine.js'),
    require('./lib/jasmine-2.3.4/jasmine-html.js'),
    require('./lib/jasmine-2.3.4/boot.js'),
].join(';');

eval.call(global, scripts);
sourceMapSupport.install();
