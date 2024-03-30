/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  const potentialPivot = Math.sqrt(n * (n + 1) / 2);
    
    // Check if the potential pivot is an integer
    if (Number.isInteger(potentialPivot)) {
        return Math.floor(potentialPivot); // If yes, return the floor value
    } else {
        return -1; // Otherwise, return -1 indicating no valid pivot
    }
};