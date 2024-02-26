function numIdenticalPairs(nums) {
    let count = 0;
    const freq = {};
    for (const num of nums) {
        if (freq[num]) {
            count += freq[num];
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }
    return count;
}


