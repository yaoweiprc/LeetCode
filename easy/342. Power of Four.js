// https://leetcode.com/problems/power-of-four/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if ((n & (n - 1)) === 0 && (n << 1) !== 0) {
        let count = 0;
        while (n !== 0) {
            n = n >> 1;
            count++;
        }
        if ((count & 1) === 1) {
            return true;
        }
    }
    return false;
};