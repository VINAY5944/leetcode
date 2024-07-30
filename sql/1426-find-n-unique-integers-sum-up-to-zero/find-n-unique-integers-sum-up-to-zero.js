/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
      let result = [];
    
    if (n % 2 === 1) {
        // If n is odd, include zero
        result.push(0);
        n--;
    }
    
    // Generate pairs of integers
    for (let i = 1; i <= n / 2; i++) {
        result.push(i);
        result.push(-i);
    }
    
    return result;
};