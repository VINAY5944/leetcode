/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const n = nums.length;
    let count = 0;

    // Find the point where the order breaks
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
    }

    // If there is more than one break point, the array cannot be a rotated sorted array
    return count <= 1;
};
