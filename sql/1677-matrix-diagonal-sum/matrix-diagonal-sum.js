/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let len = mat.length;
    let sum = 0;
    
    for (let i = 0; i < len; i++) {
        // Sum elements along the main diagonal
        sum += mat[i][i];
        // Sum elements along the secondary diagonal
        sum += mat[len - i - 1][i];
    }
   
    // If the matrix size is odd, subtract the middle element to avoid double counting
    if (len % 2 === 1) {
        sum -= mat[Math.floor(len / 2)][Math.floor(len / 2)];
    }
    
    return sum;
};
