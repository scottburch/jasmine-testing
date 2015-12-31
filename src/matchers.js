var _ = require('lodash');

beforeEach(() => {
    jasmine.addMatchers({
        toHaveLength: makeMatcherFactory('to have length', actual => actual.length),
        toHaveClass: makeMatcherFactory('to have class',  (actual, expected) => actual.hasClass(expected) ? expected : ''),
        toContainInBody: makeMatcherFactory('to contain in body', (actual, expected) => _.contains(actual.html(), expected) ? expected : '')
    });
});


function makeMatcherFactory(text, fn) {
    return (util, customEqualityTesters) => ({
        compare: (actual, expected) => {
            var pass = util.equals(fn(actual, expected), expected, customEqualityTesters);
            var message = pass ?  `expected ${actual} not ${text} ${expected}` : `expected ${actual} ${text} ${expected}`
            return {pass: pass, message: message};
        }
    });
}