/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let j = 0; // Pointer for the position to swap an even number

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) { // If the current number is even
            // Swap nums[i] with nums[j]
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++; // Move j to the next position
        }
    }

    return nums;
};

