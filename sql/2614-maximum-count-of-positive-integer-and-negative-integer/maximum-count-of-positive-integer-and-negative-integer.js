/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {

let neg=0;
let pos=0;
for(let i=0;i<nums.length;i++){

if(nums[i]<0){
    neg++
}

if(nums[i]>0){
    pos++
}

}


return neg>pos?neg:pos;


};