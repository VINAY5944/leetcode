/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let count1 = 0;
    let count2 = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0 && nums[i] <= 9) {
            count1 += nums[i];
        } else if (nums[i] >= 10 && nums[i] <= 99) {
            count2 += nums[i];
        }
    }
    
    console.log(count1, count2);
    
    return count1 !== count2;
};

