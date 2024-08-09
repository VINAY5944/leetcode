/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
if(arr.length==1){
    return true
}
   arr.sort((a,b)=>a-b) ;


 let diff=arr[0]-arr[1];
 for(let i=0;i<arr.length-1;i++){
    if(arr[i]-arr[i+1]==diff){
        continue
    }
    else return false
 }
 return true
};