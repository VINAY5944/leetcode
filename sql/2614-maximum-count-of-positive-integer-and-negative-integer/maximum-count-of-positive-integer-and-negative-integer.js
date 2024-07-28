var maximumCount = function(nums) {
    let start = 0
    let end = nums.length - 1
    let result = -1
    while (nums[nums.length - 1] === 0) {
        nums.pop()
    } 
    while (start <= end) {
        let mid = (Math.floor((start + end) / 2))
        
        if (nums[mid] > 0) {
            result = mid
            end = mid - 1
        } else {
            start = mid + 1
        } 
    } 
    if (nums[nums.length - 1] < 0) {
        return nums.length
    }
    if (result === -1) {
        return 0
    }
    let positive = nums.length - result
    while (nums[result - 1] > -1) {
        result--
    }
    let negative = result
    return positive > negative ? positive : negative
}