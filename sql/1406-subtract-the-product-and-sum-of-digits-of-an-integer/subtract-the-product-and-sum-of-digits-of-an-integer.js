/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    // Convert n to a string, then to an array of its digits
    const digits = n.toString().split("");
    
    // Calculate the product of the digits
    const product = digits.reduce((acc, currentValue) => acc * Number(currentValue), 1);
    
    // Calculate the sum of the digits
    const sum = digits.reduce((acc, currentValue) => acc + Number(currentValue), 0);
    
    // Subtract sum from product and return
    return product - sum;
};

