/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const d=num.toString().split("");
    console.log(d)
let count=0
    for(let i=0;i<d.length;i++){
if(num%d[i]==0){
count++
}

    }
    return count
};