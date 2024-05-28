// https://leetcode.com/problems/sum-of-two-integers/description/
// https://leetcode.com/problems/sum-of-two-integers/solutions/132479/simple-explanation-on-how-to-arrive-at-the-solution

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let c;
    while (b !== 0) {
        c = a & b;
        a = a ^ b;
        b = c << 1;
    }
    return a;
};