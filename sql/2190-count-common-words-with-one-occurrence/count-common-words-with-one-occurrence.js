/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
     // Helper function to create a hash map with word counts
    function createCountMap(words) {
        const countMap = new Map();
        for (const word of words) {
            countMap.set(word, (countMap.get(word) || 0) + 1);
        }
        return countMap;
    }
    
    // Create hash maps for both word lists
    const countMap1 = createCountMap(words1);
    const countMap2 = createCountMap(words2);
    
    let resultCount = 0;
    
    // Check words in countMap1 if they are in countMap2 and have count 1 in both maps
    for (const [word, count1] of countMap1) {
        if (count1 === 1 && countMap2.get(word) === 1) {
            resultCount++;
        }
    }
    
    return resultCount;
};