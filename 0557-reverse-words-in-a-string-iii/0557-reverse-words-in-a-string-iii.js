/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Split the input string into an array of words
    const words = s.split(' ');
    
    // Iterate through each word and reverse its characters
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseString(words[i]);
    }
    
    // Join the reversed words back together into a single string
    return words.join(' ');
};

// Helper function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
