global.waitUntilTrue = fn => {
    return new Promise(function looper(resolve){
        fn() ? resolve() : setTimeout(looper.bind(null, resolve), 10);
    });
};


