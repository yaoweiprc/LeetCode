// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ret = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            ret += prices[i] - prices[i - 1];
        }
    }
    return ret;
};