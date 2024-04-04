/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  const m=coordinates.split("")  
const arr=["a","c","e","g"]
const l=arr.includes(m[0])
if(l){
    return m[1]%2===0
}
else{
    return m[1]%2!==0
}

};