/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
 const cycleLength = 2 * (n - 1);
    const k_mod = k % cycleLength;

    if (k_mod < n) {
        return k_mod;
    } else {
        return 2 * (n - 1) - k_mod;
    }   
};