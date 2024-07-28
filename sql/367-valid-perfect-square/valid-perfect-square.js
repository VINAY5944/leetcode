/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num < 1) return false;
    if (num === 1) return true;
    let left = 1;
    let right = num;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        const sqaure = middle * middle;
        if (sqaure === num) {
            return true
        } else if (sqaure > num) {
            right = middle - 1
        } else left = middle + 1

    }
    return false
};