/**
 * Sorts an array in ascending order using the selection sort algorithm.
 * @param {number[]} nums - The array to sort.
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length;

    // Loop through the array
    for (let i = 0; i < n; i++) {
        // Assume the minimum is the first element
        let minIndex = i;
        // Test against elements after i to find the smallest
        for (let j = i + 1; j < n; j++) {
            // If this element is less, then it is the new minimum
            if (nums[j] < nums[minIndex]) {
                // Found new minimum; remember its index
                minIndex = j;
            }
        }

        if (minIndex != i) {
            // Swap the elements
            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }
    // The array is sorted in-place, and there's no need to return it.
};

// Example usage
let colorArray = [2, 0, 2, 1, 1, 0];
sortColors(colorArray);
console.log(colorArray); // Output: [0, 0, 1, 1, 2, 2]
