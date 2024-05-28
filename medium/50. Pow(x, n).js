// https://leetcode.com/problems/powx-n/description/
// https://leetcode.com/problems/powx-n/solutions/1337794/java-c-simple-o-log-n-easy-faster-than-100-explained/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0)
        x = 1 / x;
    let res = 1;
    n = Math.abs(n);
    while (n > 0) {
        if (n & 1 > 0) {
            res *= x;
        }
        x *= x;
        n = n >> 1;
    }
    return res;
};