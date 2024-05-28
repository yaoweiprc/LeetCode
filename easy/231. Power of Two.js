// https://leetcode.com/problems/power-of-two/
// https://medium.com/codex/bit-manipulation-in-javascript-117cd525e4d

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && !(n & (n - 1));
};