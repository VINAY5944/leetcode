/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const digits = new Set();
    
    // Collect unique digits
    for (const char of s) {
        if (char >= '0' && char <= '9') {
            digits.add(Number(char));
        }
    }
    
    // Convert the set to an array and sort in descending order
    const sortedDigits = Array.from(digits).sort((a, b) => b - a);
    
    // Return the second largest digit, or -1 if it does not exist
    return sortedDigits.length >= 2 ? sortedDigits[1] : -1;
};
