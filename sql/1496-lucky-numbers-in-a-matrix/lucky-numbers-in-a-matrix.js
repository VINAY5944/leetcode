/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let luckyNumbers = [];

    for (let i = 0; i < matrix.length; i++) {
        // Find the minimum value in the current row
        let minInRow = Math.min(...matrix[i]);
        // Find the index of this minimum value
        let minIndex = matrix[i].indexOf(minInRow);
        // Check if this minimum value is the maximum in its column
        let isMaxInColumn = true;

        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][minIndex] > minInRow) {
                isMaxInColumn = false;
                break;
            }
        }

        // If it's the maximum in its column, add it to the lucky numbers
        if (isMaxInColumn) {
            luckyNumbers.push(minInRow);
        }
    }

    return luckyNumbers;
};

