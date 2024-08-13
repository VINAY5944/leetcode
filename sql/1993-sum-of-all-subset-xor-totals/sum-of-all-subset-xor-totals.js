/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let totalXORSum = 0;
    let n = nums.length;
    let totalSubsets = 1 << n; // 2^n subsets
    
    // Iterate over all possible subsets
    for (let i = 0; i < totalSubsets; i++) {
        let subsetXOR = 0;
        
        // Calculate XOR for the current subset
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) { // If the j-th bit is set in i
                subsetXOR ^= nums[j];
            }
        }
        
        // Add the XOR of the current subset to the total
        totalXORSum += subsetXOR;
    }
    
    return totalXORSum;
};

// Example usage:
console.log(subsetXORSum([1, 3])); // Output: 6
console.log(subsetXORSum([5, 1, 6])); // Output: 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])); // Output: 480
