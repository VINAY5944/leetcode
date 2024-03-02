/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let product = (nums[i] - nums[j]) * nums[k];
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }
    
    return maxProduct > 0 ? maxProduct : 0;
};


