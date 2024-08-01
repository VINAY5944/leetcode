/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // Split the string into words
    let words = s.split(" ");
    // Create an array to hold the sorted words
    const sortedWords = new Array(words.length);

    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        // Get the position of the word from the last character
        let position = parseInt(words[i].charAt(words[i].length - 1));
        // Get the actual word by removing the last character
        let word = words[i].slice(0, words[i].length - 1);
        // Place the word in the correct position in the sortedWords array
        sortedWords[position - 1] = word;
    }

    // Join the sorted words into a single string and return
    return sortedWords.join(" ");
};

