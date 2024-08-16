function numPairsDivisibleBy60(time) {
    // Create a map to count the occurrences of each remainder
    const remainderCount = new Map();
    let pairCount = 0;
    
    for (const t of time) {
        // Calculate the remainder when divided by 60
        const remainder = t % 60;
        
        // Calculate the complement that would make the sum divisible by 60
        const complement = (60 - remainder) % 60;
        
        // If the complement exists in the map, it means we can form pairs
        if (remainderCount.has(complement)) {
            pairCount += remainderCount.get(complement);
        }
        
        // Update the map with the current remainder
        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }
    
    return pairCount;
}

// Example usage
const time1 = [30, 20, 150, 100, 40];
console.log(numPairsDivisibleBy60(time1)); // Output: 3

const time2 = [60, 60, 60];
console.log(numPairsDivisibleBy60(time2)); // Output: 3
