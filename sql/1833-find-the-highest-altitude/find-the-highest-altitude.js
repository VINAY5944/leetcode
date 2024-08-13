/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitude = 0; // Starting altitude
    let maxAltitude = 0;     // Highest altitude seen
    
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i]; // Update current altitude
        maxAltitude = Math.max(maxAltitude, currentAltitude); // Track max altitude
    }
    
    return maxAltitude;
};

// Example usage:
console.log(largestAltitude([-5,1,5,0,-7])); // Output: 1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])); // Output: 0
