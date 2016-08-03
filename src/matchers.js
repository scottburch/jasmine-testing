var _ = require('lodash');


var matchers = {};

matchers.toHaveLength = makeMatcherFactory('to have length', actual => actual.length);
matchers.toHaveClass = makeMatcherFactory('to have class', (actual, expected) => $j(actual).hasClass(expected) ? expected : '');
matchers.toHaveFieldWithLabel = makeMatcherFactory('to have field with label', (actual, expected) => {
    var {name, label} = expected;
    return actual.find('.input-form__group').filter((idx, el) => $j(el).find(`label:contains(${label})`).length && $j(el).find(`[name="${name}"]`).length).length ? expected : []
});
matchers.toContain = makeMatcherFactory('to contain', (actual, expected) => $j(actual).find(expected).length ? expected : 'not found');
matchers.toContainText = makeMatcherFactory('to contain text', (actual, expected) => $j(actual).find(`>:contains(${expected})`).length ? expected : '');
matchers.toContainDomEl = makeMatcherFactory('to contain DOM Element', matchers.toContain);
matchers.toContainInBody = makeMatcherFactory('to contain in body', (actual, expected) => _.contains(actual.html(), expected) ? expected : '');

beforeEach(() => jasmine.addMatchers(matchers));



function makeMatcherFactory(text, fn) {
    return (util, customEqualityTesters) => ({
        compare: (actual, expected) => {
            var pass = util.equals(fn(actual, expected), expected, customEqualityTesters);
            try {
                var expectedString = JSON.stringify(expected)
            }
            catch (e) {
                var expectedString = expected
            }
            try {
                actualString = _.property('component.nodeName')(actual);
                actualString = actualString || JSON.stringify(actual)
            }
            catch (e) {
                var actualString = actual
            }
            var message = pass ? `expected ${actualString} not ${text} ${expectedString}` : `expected ${actualString} ${text} ${expectedString}`
            return {pass: pass, message: message};
        }
    });
}
