/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0; // Initialize max to 0
    for (let i = 0; i < accounts.length; i++) { // Use accounts.length instead of accounts
        const sum = accounts[i].reduce((a, b) => a + b, 0); // Sum up the amounts in the current account
        max = Math.max(max, sum); // Update max if the current sum is greater
    }
    return max; // Return the maximum wealth
};
