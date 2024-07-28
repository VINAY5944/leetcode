/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim the string to remove any trailing spaces
    s = s.trim();
    // Split the string by spaces
    const arr = s.split(" ");
    // Return the length of the last word in the array
    return arr[arr.length - 1].length;
};

// Example usage:
