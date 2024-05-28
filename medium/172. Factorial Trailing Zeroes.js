// https://leetcode.com/problems/factorial-trailing-zeroes/description/
// https://leetcode.com/problems/factorial-trailing-zeroes/solutions/52373/simple-c-c-solution-with-detailed-explaination
// https://leetcode.com/problems/factorial-trailing-zeroes/solutions/52371/my-one-line-solutions-in-3-languages/comments/112755

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};