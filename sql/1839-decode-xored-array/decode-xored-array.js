/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const decoded = [first]; // Initialize the decoded list with the first element

    for (let i = 0; i < encoded.length; i++) {
        // XOR the decoded last element with the corresponding encoded element
        decoded.push(decoded[decoded.length - 1] ^ encoded[i]);
    }

    return decoded;
};
