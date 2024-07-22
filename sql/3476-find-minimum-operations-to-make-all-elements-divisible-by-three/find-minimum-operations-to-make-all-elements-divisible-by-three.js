/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let f=0;
    const m=nums.length
   for(let i=0;i<m;i++){
    if(nums[i]%3!=0){
      f++
    }
    }
    return f
};