/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0; // To count the number of balanced substrings
    let balance = 0; // To keep track of the balance between 'L' and 'R'
    
    for (let i = 0; i < s.length; i++) {
        // Increment or decrement balance based on the character
        if (s[i] === 'L') {
            balance++;
        } else if (s[i] === 'R') {
            balance--;
        }
        
        // When balance is zero, we have a balanced substring
        if (balance === 0) {
            count++;
        }
    }
    
    return count;
};
