module.exports = {};

global.waitUntilTrue = fn => {
    return new Promise(function looper(resolve){
        fn() ? resolve() : setTimeout(looper.bind(null, resolve), 10);
    });
};

global.spyOnPrivate = (function() {
    var removeSpyFunctions = [];

    afterEach(() => {
        removeSpyFunctions.forEach(fn => fn());
        removeSpyFunctions = [];
    });


    return function(obj, prop) {
        var mySpy = jasmine.createSpy();
        var oldFn = obj.__get__(prop);
        obj.__set__(prop, mySpy);

        removeSpyFunctions.push(() => obj.__set__(prop, oldFn));

        return mySpy;
    }

}());


