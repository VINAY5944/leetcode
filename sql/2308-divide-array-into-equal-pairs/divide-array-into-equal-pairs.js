/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
     let frequencyMap = new Map();

  // Populate the frequency map
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
console.log(frequencyMap);

for(let num of nums){
  if( frequencyMap.get(num)%2!=0){
    return false
  }
}

return true
};