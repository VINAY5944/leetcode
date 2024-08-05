/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    // Create a map to count occurrences of each string
    const countMap = new Map();
    
    // Populate the map with string counts
    for (const str of arr) {
        countMap.set(str, (countMap.get(str) || 0) + 1);
    }
    
    // Filter the array to keep only distinct strings
    const distinctStrings = arr.filter(str => countMap.get(str) === 1);
    
    // Check if k is within the bounds of the distinctStrings array
    if (k > 0 && k <= distinctStrings.length) {
        return distinctStrings[k - 1]; // k-1 because array indices are 0-based
    } else {
        return ""; // Return empty string if k is out of bounds
    }
};

