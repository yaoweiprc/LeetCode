// https://leetcode.com/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = [0];
    for (let i = 1; i <= amount; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        for (let coin of coins) {
            if (i - coin >= 0 && dp[i - coin] !== -1) {
                min = Math.min(dp[i - coin] + 1, min);
            }
        }
        if (min === Number.MAX_SAFE_INTEGER) {
            dp[i] = -1;
        } else {
            dp[i] = min;
        }
    }
    return dp[amount];
};