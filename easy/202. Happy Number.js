// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set =  new Set();
    while (!set.has(n)) {
        set.add(n);
        let sum = 0;
        while (n > 0) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n === 1;
};