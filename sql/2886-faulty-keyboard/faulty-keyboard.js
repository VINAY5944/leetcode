/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let result = '';
    let currentString = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            // Reverse the current portion of the string typed so far
            currentString = currentString.split('').reverse().join('');
        } else {
            // Append the current character to the string typed so far
            currentString += s[i];
        }
    }
    
    // Append the remaining portion of the string typed so far
    result += currentString;
    
    return result;
};
