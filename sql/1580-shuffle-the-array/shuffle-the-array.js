/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr1=nums.slice(0,n);
    const arr2=nums.slice(n)
 let temp=[]

for(let i=0;i<n;i++){
temp.push(arr1[i]);
temp.push(arr2[i])

}
return temp
};