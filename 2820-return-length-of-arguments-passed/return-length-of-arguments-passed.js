/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
   var b=[...args]
   var c=b.length;
  return c
};

/**
 * argumentsLength(1, 2, 3); // 3
 */