// https://leetcode.com/problems/perfect-squares/description/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        let j = 1;
        while (j * j <= i) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            j++;
        }
    }
    return dp[n];
};