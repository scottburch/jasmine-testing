var _ = require('lodash');

beforeEach(() => {
    jasmine.addMatchers({
        toHaveLength: makeMatcherFactory(actual => actual.length),
        toHaveClass: makeMatcherFactory((actual, expected) => actual.hasClass(expected) ? expected : actual.attr('class')),
        toContainInBody: makeMatcherFactory((actual, expected) => _.contains(actual.html(), expected) ? expected : actual.html())
    });
});


function makeMatcherFactory(fn) {
    return (util, customEqualityTesters) => ({
        compare: (actual, expected) => ({pass: util.equals(fn(actual, expected), expected, customEqualityTesters)})
    });
}