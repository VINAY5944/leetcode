/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  // Create a map to store the frequency of each number
  let frequencyMap = new Map();

  // Populate the frequency map
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Sort the array based on frequency, and by value if frequencies are the same
  nums.sort((a, b) => {
    let freqA = frequencyMap.get(a);
    let freqB = frequencyMap.get(b);

    // If frequencies are different, sort by frequency (ascending)
    if (freqA !== freqB) {
      return freqA - freqB;
    }

    // If frequencies are the same, sort by value (descending)
    return b - a;
  });

  return nums;
};

