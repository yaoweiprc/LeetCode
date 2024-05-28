// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return  false;
    }
    let reverse = 0;
    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === reverse || x === Math.floor(reverse / 10);
}