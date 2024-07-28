/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const arr = word.split("");
    let r = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ch) {
            r = i;
            break;
        }
    }

    if (r === -1) {
        return word; // If the character is not found, return the original word
    }

    let b = arr.slice(0, r + 1).reverse();
    let c = arr.slice(r + 1, arr.length);
    let result = b.concat(c).join("");
    return result;
};
