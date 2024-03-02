/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    resultStr = []
    for(let i=0;i<s.length;i++){
        if(s[i]==='i')
            resultStr.reverse()
        else
            resultStr.push(s[i])
    }
    return resultStr.join('')
};