/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let charArr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        charArr[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (charArr[s.charCodeAt(i) - 'a'.charCodeAt()] === 1) return i;
    }
    return -1;
};