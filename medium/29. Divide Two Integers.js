// https://leetcode.com/problems/divide-two-integers/description/
// https://leetcode.com/problems/divide-two-integers/solutions/1516367/complete-thinking-process-intuitive-explanation-all-rules-followed-c-code

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // js位操作只能搞32位有符号数，这个-((2^31)-1)实在搞不了
    if (dividend === -2147483648) {
        if (divisor < 0) {
            return Math.min(Math.pow(2, 31) - 1, Math.floor(dividend / divisor));
        } else {
            return Math.max(-Math.pow(2, 31), Math.ceil(dividend / divisor));
        }
    }
    const isPositive = ((dividend < 0) === (divisor < 0));
    let res = 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend >= divisor) {
        let count = 0;
        // why deviend >>> 1? See https://leetcode.com/problems/divide-two-integers/solutions/13528/ac-javascript-code
        while (dividend>>>1 >= divisor<<count) {
            count++;
        }
        res += (1<<(count));
        dividend = dividend - (divisor<<count);
    }
    return isPositive ? res : -res;
};