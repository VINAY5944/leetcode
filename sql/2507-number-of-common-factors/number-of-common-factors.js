/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let c =Math.min(a,b);
    let count=0;
    for (let i=1;i<=c;i++){
if(a%i==0&&b%i==0){
    count++
}
else continue
    }
    return count
};