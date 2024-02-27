/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    return nums.map((num) => {
        sum += num; // Add the current number to the running sum
        return sum; // Return the running sum for the current index
    });
};
