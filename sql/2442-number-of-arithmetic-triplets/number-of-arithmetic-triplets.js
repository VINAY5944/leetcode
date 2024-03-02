/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    
    // Loop through each pair of elements
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the difference between nums[j] and nums[i] equals diff
            if (Math.abs(nums[j] - nums[i]) === diff) {
                // Loop through the rest of the array to find the third element
                for (let k = j + 1; k < nums.length; k++) {
                    // Check if the difference between nums[k] and nums[j] equals diff
                    if (Math.abs(nums[k] - nums[j]) === diff) {
                        // If so, increment the count
                        count++;
                    }
                }
            }
        }
    }
    
    return count;
};
