/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    // Step 1: Count the frequency of each number
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Extract distinct numbers from the frequency map
    const distinctNumbers = Array.from(frequencyMap.keys());
    const numDistinct = distinctNumbers.length;
    
    // Step 3: Calculate the number of unequal triplets
    let totalTriplets = 0;
    
    for (let i = 0; i < numDistinct; i++) {
        for (let j = i + 1; j < numDistinct; j++) {
            for (let k = j + 1; k < numDistinct; k++) {
                const a = distinctNumbers[i];
                const b = distinctNumbers[j];
                const c = distinctNumbers[k];
                // Calculate the number of triplets formed by (a, b, c)
                totalTriplets += frequencyMap.get(a) * frequencyMap.get(b) * frequencyMap.get(c);
            }
        }
    }
    
    return totalTriplets;
};
