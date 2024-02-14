/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the cleaned string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
};
