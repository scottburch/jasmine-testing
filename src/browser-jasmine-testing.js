var $j = require('jquery');

require('./lib/jasmine-2.3.4/jasmine.css');
require('es5-shim')

var scripts = [
    require('./lib/jasmine-2.3.4/jasmine.js'),
    require('./lib/jasmine-2.3.4/jasmine-html.js'),
    require('./lib/jasmine-2.3.4/boot.js')
].join(';');


eval.call(global, scripts);