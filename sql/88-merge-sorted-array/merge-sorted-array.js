/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let arr1 = [];
    let arr2 = [];

    // Copy elements from nums1 and nums2 to separate arrays
    for (let i = 0; i < m; i++) {
        arr1.push(nums1[i]);
    }

    for (let i = 0; i < n; i++) {
        arr2.push(nums2[i]);
    }

    // Concatenate arr1 and arr2, sort the resulting array
    let mergedArray = [...arr1, ...arr2].sort((a,b)=>a-b);

    // Modify nums1 in-place
    for (let i = 0; i < m + n; i++) {
        nums1[i] = mergedArray[i];
    }
};