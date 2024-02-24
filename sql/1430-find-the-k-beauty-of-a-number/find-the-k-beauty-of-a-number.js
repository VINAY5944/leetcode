/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    var count = 0;
    let a = num.toString().split(""); // Convert number to string and then split into array of characters
    for (let i = 0; i <= a.length - k; i++) {
        var b = parseInt(a.slice(i, i + k).join(""));
        if (num % b === 0) {
            count++;
        }
    }
    return count;
};

