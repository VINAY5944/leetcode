/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabetSet = new Set();
    
    for (let char of sentence) {
        if (char >= 'a' && char <= 'z') {
            alphabetSet.add(char);
        }
    }
    
    return alphabetSet.size === 26;
};
