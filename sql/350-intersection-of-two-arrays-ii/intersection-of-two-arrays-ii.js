function intersect(nums1, nums2) {
    const count = {};
    const result = [];
    
    // Count occurrences of each element in nums1
    for (const num of nums1) {
        count[num] = (count[num] || 0) + 1;
    }
    
    // Check elements in nums2
    for (const num of nums2) {
        if (count[num] > 0) {
            result.push(num);
            count[num] -= 1;
        }
    }
    
    return result;
}
