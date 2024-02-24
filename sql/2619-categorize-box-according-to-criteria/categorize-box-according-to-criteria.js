/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const volume = length * width * height;
    const isHeavy = mass >= 100;
    const isBulky = length >= 10000 || width >= 10000 || height >= 10000 || volume >= 1000000000;

    if (isHeavy && isBulky) {
        return "Both";
    } else if (!isHeavy && !isBulky) {
        return "Neither";
    } else if (isHeavy) {
        return "Heavy";
    } else {
        return "Bulky";
    }
};

// Example usage:
console.log(categorizeBox(1000, 35, 700, 300)); // Output: "Heavy"
console.log(categorizeBox(200, 50, 800, 50)); // Output: "Neither"

