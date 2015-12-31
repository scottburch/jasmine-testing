bindPolyfill();

require('./lib/jasmine-2.4.1/jasmine.css');

require('es5-shim');
var scripts = [
    require('source-map-support/browser-source-map-support.js'),
    require('./lib/jasmine-2.4.1/jasmine.js'),
    require('./lib/jasmine-2.4.1/jasmine-html.js'),
    require('./lib/jasmine-2.4.1/boot.js'),
].join(';');


eval.call(global, scripts);
require('./matchers');


sourceMapSupport.install();

// Needed for phantomJS which does not include Function.prototype.bind()
function bindPolyfill() {
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
            if (typeof this !== 'function') {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
            }

            var aArgs   = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP    = function() {},
                fBound  = function() {
                    return fToBind.apply(this instanceof fNOP
                            ? this
                            : oThis,
                        aArgs.concat(Array.prototype.slice.call(arguments)));
                };

            if (this.prototype) {
                // native functions don't have a prototype
                fNOP.prototype = this.prototype;
            }
            fBound.prototype = new fNOP();

            return fBound;
        };
    }
}