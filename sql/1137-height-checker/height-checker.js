/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Create a copy of the heights array and sort it
    const sortedHeights = [...heights].sort((a, b) => a - b);
    
    let count = 0;
    // Compare the original and sorted arrays
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }
    
    return count;
};
