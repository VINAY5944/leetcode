/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;

    for (let row of grid) {
        let left = 0;
        let right = row.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (row[mid] < 0) {
                right = mid - 1; // Look on the left side
            } else {
                left = mid + 1; // Look on the right side
            }
        }

        // All elements from `left` to the end of the row are negative
        count += row.length - left;
    }

    return count;
};

// Example usage:
