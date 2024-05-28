// https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    const MAX_POSITIVE_INT = 2 ** 31 - 1;
    const MIN_NEGATIVE_INT = -(2 ** 31);
    let result = 0;
    while (x !== 0) {
        let digit = x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
        result = result * 10 + digit;
        if (result > MAX_POSITIVE_INT || result < MIN_NEGATIVE_INT) {
            return 0;
        }
    }
    return result;
}

console.log(reverse(1534236469));
console.log(reverse(-21));