/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums
    }

    let middle =Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,middle))
    let right = sortArray(nums.slice(middle))

   return mergeArray(left,right)
};

function mergeArray(left,right){
    let sortedArray = []
    let i = 0
    let j = 0

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            sortedArray.push(left[i])
            i++
        }else{
            sortedArray.push(right[j])
            j++
        }
    }

    while(i<left.length){
        sortedArray.push(left[i])
        i++
    }

    while(j<right.length){
        sortedArray.push(right[j])
        j++
    }

    return sortedArray
}