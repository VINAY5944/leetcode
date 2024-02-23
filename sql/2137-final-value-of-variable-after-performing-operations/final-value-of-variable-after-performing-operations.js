/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (const operation of operations) {
        operation.includes('+') ? x++ : x--;
    }
    return x;
};