// give fn as an input
var once = function(fn) {
    // for tracking like function is called or not
    let isCalled = false;
    // we have to return a function
    return function(...args){
        // if function is called , we have to return undefined
        if(isCalled) return undefined;
        // change is called to true
        isCalled = !isCalled;
        // it will also return a function (otherwise)
        return fn(...args);
    }
};