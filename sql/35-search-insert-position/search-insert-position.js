/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
const len=nums.length;


for(let i=0;i<len;i++){


if(nums[i]<target&&nums[i+1]>target){
    return i+1
}
if(nums[0]>target){
    return 0
}
if(nums[len-1]<target){
    return len
}

if(nums[i]==target){
    return i
}


}



};