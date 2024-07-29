/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = [];
    const sorted = nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < sorted.length; i += 2) {
        if (i + 1 < sorted.length) {
            arr.push(sorted[i + 1]); // Push the next element
        }
        arr.push(sorted[i]); // Push the current element
    }

    return arr;
};
