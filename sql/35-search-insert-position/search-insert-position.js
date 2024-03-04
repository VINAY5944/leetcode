/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0; // Start index of the search range
    let high = nums.length - 1; // End index of the search range

    while (low <= high) { // Keep searching until the search range is valid
        const mid = Math.floor((low + high) / 2); // Calculate the middle index

        if (nums[mid] === target) { // If the middle number is equal to the target
            return mid; // We found the target, return its index
        } else if (nums[mid] < target) { // If the middle number is smaller than the target
            low = mid + 1; // Update the low index to search on the right half
        } else { // If the middle number is larger than the target
            high = mid - 1; // Update the high index to search on the left half
        }
    }

    // If we reach here, it means the target is not found in the array
    // Now, low represents the index where the target should be inserted
    return low;
};
