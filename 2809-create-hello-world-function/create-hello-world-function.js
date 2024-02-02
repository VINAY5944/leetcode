/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
      var h="Hello World" 
     return h
    }
};

  const f = createHelloWorld();
  f(); // "Hello World"
