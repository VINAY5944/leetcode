/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let i = 0, j = 0;
    
    // Merge characters from both strings alternately
    while (i < word1.length && j < word2.length) {
        result += word1[i++];
        result += word2[j++];
    }
    
    // Append remaining characters from word1 if any
    while (i < word1.length) {
        result += word1[i++];
    }
    
    // Append remaining characters from word2 if any
    while (j < word2.length) {
        result += word2[j++];
    }
    
    return result;
};
