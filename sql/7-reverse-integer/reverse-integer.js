/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Convert the number to string and split into an array of characters
    let str = x.toString();
    // Check if the number is negative
    let isNegative = str[0] === '-';
    // Reverse the digits
    let reversedStr = (isNegative ? str.slice(1) : str).split('').reverse().join('');
    // Convert the reversed string back to a number
    let reversedNum = parseInt(reversedStr);
    // If it was negative, make it negative again
    if (isNegative) {
        reversedNum = -reversedNum;
    }
    // Ensure the number is within the 32-bit signed integer range
    if (reversedNum < -(2**31) || reversedNum > 2**31 - 1) {
        return 0;
    }
    return reversedNum;
};

