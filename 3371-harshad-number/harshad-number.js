/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
 const l=Array.from(x.toString()).map(Number);
    const sum=l.reduce((a,b)=>a+b);
    return x%sum==0?sum:-1
};