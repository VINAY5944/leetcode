/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const l=nums.sort((a,b)=>a-b)


    return  Math.max(((l[0]-1)*(l[1]-1)),((l[nums.length-1]-1)*(l[nums.length-2]-1)))
};