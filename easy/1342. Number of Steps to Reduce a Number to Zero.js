// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let stepCount = 0;
    while (num !== 0) {
        // even
        if ((num & 1) === 0) {
            num >>= 1;
        }
        // odd
        else {
            // num & 11111110 在num是奇数时相当于给num减1
            num &= -2;
        }
        stepCount++;
    }
    return stepCount;
};