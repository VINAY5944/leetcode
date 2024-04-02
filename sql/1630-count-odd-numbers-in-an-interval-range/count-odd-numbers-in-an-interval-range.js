/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    // Check if low is odd, if not, adjust it to the next odd number
    if (low % 2 === 0) {
        low++;
    }
    
    // Check if high is odd, if not, adjust it to the previous odd number
    if (high % 2 === 0) {
        high--;
    }

    // Calculate the count of odd numbers
    return Math.floor((high - low) / 2) + 1;
};
