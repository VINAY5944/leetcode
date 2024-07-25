/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    
    // Count the frequency of each word
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    
    // Convert map to array and sort it
    let sortedWords = Array.from(map.entries()).sort((a, b) => {
        // Sort by frequency in descending order
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }
        // If frequencies are the same, sort by word lexicographically
        return a[0].localeCompare(b[0]);
    });
    
    // Get the top k frequent words
    return sortedWords.slice(0, k).map(entry => entry[0]);
};

