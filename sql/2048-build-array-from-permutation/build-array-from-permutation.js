/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    

    return nums.map((value, ind) =>{
        return nums[nums[ind]]
    })
};