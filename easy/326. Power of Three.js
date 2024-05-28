// https://leetcode.com/problems/power-of-three/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n > 0) {
        while (n % 3 === 0) {
            n = n / 3;
        }
        if (n === 1)
            return true;
    }
    return false;
};