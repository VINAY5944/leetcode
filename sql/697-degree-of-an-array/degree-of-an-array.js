function findShortestSubArray(nums) {
    const counts = {};
    const firstIndex = {};
    const lastIndex = {};
    let degree = 0;

    // Populate counts, firstIndex, and lastIndex
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (counts[num] == null) {
            counts[num] = 0;
            firstIndex[num] = i;
        }
        
        counts[num]++;
        lastIndex[num] = i;
        
        degree = Math.max(degree, counts[num]);
    }

    let minLength = nums.length;

    // Find the smallest subarray for elements that match the degree
    for (let num in counts) {
        if (counts[num] === degree) {
            const length = lastIndex[num] - firstIndex[num] + 1;
            minLength = Math.min(minLength, length);
        }
    }

    return minLength;
}
