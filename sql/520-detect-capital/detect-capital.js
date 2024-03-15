/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capital=0; let small=0;
    for(let c of word){
        // console.log(c)
        if(c.toUpperCase() == c){
            if(small !=0) return false;
            capital++;
        }else small++; 
    }
    if(capital >0 && word[0]!= word[0].toUpperCase() ) return false;
    if(small !=0 && capital>1) return false;
    return true;
};