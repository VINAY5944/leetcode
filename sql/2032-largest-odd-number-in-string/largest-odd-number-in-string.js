/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // Iterate from the end of the string
    for (let i = num.length - 1; i >= 0; i--) {
        // Check if the current character is an odd digit
        if (parseInt(num[i]) % 2 !== 0) {
            // Return the substring from the beginning to the current character (inclusive)
            return num.substring(0, i + 1);
        }
    }
    // If no odd digit is found, return an empty string
    return "";
};

// Example usage:
