var _ = require('lodash');

beforeEach(() => {
    jasmine.addMatchers({
        toHaveLength: makeMatcherFactory('to have length', actual => actual.length),
        toHaveClass: makeMatcherFactory('to have class',  (actual, expected) => actual.hasClass(expected) ? expected : ''),
        toContainInBody: makeMatcherFactory('to contain in body', (actual, expected) => _.contains(actual.html(), expected) ? expected : ''),
        toHaveFieldWithLabel: makeMatcherFactory('to have field with label', (actual, expected) => {
            var {name, label} = expected;
            return actual.find('.input-form__group').filter((idx, el) => $j(el).find(`label:contains(${label})`).length && $j(el).find(`[name="${name}"]`).length).length ? expected : []
        }),
        toContainDomEl: makeMatcherFactory('to contain DOM Element', (actual, expected) => actual.find(expected).length ? expected : 'not found')
    });
});


function makeMatcherFactory(text, fn) {
    return (util, customEqualityTesters) => ({
        compare: (actual, expected) => {
            var pass = util.equals(fn(actual, expected), expected, customEqualityTesters);
            try {var expectedString = JSON.stringify(expected)}
            catch(e) {var expectedString = expected}
            try {var actualString = JSON.stringify(actual)}
            catch(e) {var actualString = actual}
            var message = pass ?  `expected ${actualString} not ${text} ${expectedString}` : `expected ${actualString} ${text} ${expectedString}`
            return {pass: pass, message: message};
        }
    });
}
