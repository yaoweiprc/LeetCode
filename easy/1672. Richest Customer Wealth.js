// https://leetcode.com/problems/richest-customer-wealth/description/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for (let arr of accounts) {
        let tmp = 0;
        for (let balance of arr) {
            tmp += balance;
        }
        if (tmp > max) {
            max = tmp;
        }
    }
    return max;
};