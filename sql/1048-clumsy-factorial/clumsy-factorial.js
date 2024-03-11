var clumsy = function(n) {
    if (n <= 2) {
        return n;
    } else if (n === 3) {
        return 6; // 3 * 2
    }

    let result = Math.floor(n * (n - 1) / (n - 2)) + (n - 3);
    n -= 4;

    while (n >= 4) {
        result -= Math.floor(n * (n - 1) / (n - 2)) - (n - 3);
        n -= 4;
    }

    // Handle remaining numbers if n is not divisible by 4
    return result - clumsy(n);
};

console.log(clumsy(10)); // Output: 12



