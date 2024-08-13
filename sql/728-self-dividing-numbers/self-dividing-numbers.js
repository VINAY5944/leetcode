/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    
    return result;
};

var isSelfDividing = function(n) {
    let current = n;
    
    while (current > 0) {
        let digit = current % 10;
        if (digit === 0 || n % digit !== 0) {
            return false;
        }
        current = Math.floor(current / 10);
    }
    
    return true;
};

// Example usage:
console.log(selfDividingNumbers(1, 22)); 
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
