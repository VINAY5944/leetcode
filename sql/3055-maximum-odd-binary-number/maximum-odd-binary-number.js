/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // Count the number of '1's and '0's in the string
    let ones = 0;
    let zeros = 0;

    for (let char of s) {
        if (char === '1') {
            ones++;
        } else {
            zeros++;
        }
    }

    // Create the result string with the maximum number of '1's followed by the zeros and end with a '1'
    let result = '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';

    return result;
};

// Example usage:
console.log(maximumOddBinaryNumber("110101")); // Output: "1110001"
console.log(maximumOddBinaryNumber("1001"));   // Output: "1010"
