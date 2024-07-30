/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    const n = arr.length;
    
    // Precompute valid pairs
    let validPairs = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                validPairs.push([i, j]);
            }
        }
    }
    
    // Check for triplets
    for (let k = 0; k < n; k++) {
        for (let [i, j] of validPairs) {
            if (i < j && j < k && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                count++;
            }
        }
    }
    
    return count;
};
