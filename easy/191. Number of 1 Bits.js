// https://leetcode.com/problems/number-of-1-bits/
// https://medium.com/codex/bit-manipulation-in-javascript-117cd525e4d

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};