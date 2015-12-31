beforeEach(() => {
    jasmine.addMatchers({
        toHaveLength: makeMatcherFactory(actual => actual.length)
    });
});


function makeMatcherFactory(fn) {
    return (util, customEqualityTesters) => ({
        compare: (actual, expected) => ({pass: util.equals(fn(actual), expected, customEqualityTesters)})
    });
}