/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let answer = 0;
    
    while (grid[0].length > 0) {
        let maxVals = [];
        
        // Find the maximum value in each row and collect them
        for (let i = 0; i < grid.length; i++) {
            let max = Math.max(...grid[i]);
            maxVals.push(max);
            // Remove the first occurrence of the maximum value
            let index = grid[i].indexOf(max);
            grid[i].splice(index, 1);
        }
        
        // Add the maximum value of the current round to the answer
        answer += Math.max(...maxVals);
    }
    
    return answer;
};
