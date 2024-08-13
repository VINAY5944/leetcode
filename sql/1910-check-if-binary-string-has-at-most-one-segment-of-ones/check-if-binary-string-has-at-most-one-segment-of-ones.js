/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let foundSegment = false;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            // If we find '1' and haven't found a segment yet, mark as found
            if (!foundSegment) {
                foundSegment = true;
            }
        } else {
            // If we find '0' and had previously found a segment of '1's, we check for another '1' segment
            if (foundSegment && i + 1 < s.length && s[i + 1] === '1') {
                return false;
            }
        }
    }
    
    return true;
};
