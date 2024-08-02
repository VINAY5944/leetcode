/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // Convert numbers to strings
    nums = nums.map(num => num.toString());

    // Custom sort comparator: for two numbers (strings) a and b, compare a+b and b+a
    nums.sort((a, b) => (b + a) - (a + b));

    // Join the sorted array to form the largest number
    let result = nums.join('');

    // Handle edge case where the result is all zeros (e.g., [0, 0])
    return result[0] === '0' ? '0' : result;
};

// Example usage:
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
