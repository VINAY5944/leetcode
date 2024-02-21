/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

let c=0


for (let num=0;num< nums.length;num++){



if(nums[num]  !==nums[num+2]){
    nums[c]=nums[num];
    c++
}

}

return c


};