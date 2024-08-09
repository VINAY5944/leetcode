/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if the picked number is lower
 *			             1 if the picked number is higher
 *                       0 if the guess is correct
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1;
    let high = n;
    
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let result = guess(mid);
        
        if (result === 0) {
            return mid;
        } else if (result === -1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return -1; // Just a safeguard, though the problem guarantees a solution
};
