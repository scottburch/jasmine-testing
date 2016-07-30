require('../src/browser-jasmine-testing.js')

var testsContext = require.context('./specs', true, /Spec.js$/);
testsContext.keys().forEach(testsContext);