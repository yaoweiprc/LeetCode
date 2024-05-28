// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let leftIdx = 0;
    let rightIdx = s.length - 1;

    const charCodeOfLowerCaseA = 'a'.charCodeAt(0);
    const charCodeOfZero = '0'.charCodeAt(0);
    function isValidChar(idx) {
        const charCode = s[idx].toLowerCase().charCodeAt(0);
        return (charCode - charCodeOfLowerCaseA < 26 && charCode - charCodeOfLowerCaseA >= 0)
            || (charCode - charCodeOfZero < 10 && charCode - charCodeOfZero >= 0);
    }
    while (true) {
        while (leftIdx < s.length && !isValidChar(leftIdx)) {
            leftIdx++;
        }
        while (rightIdx >= 0 && !isValidChar(rightIdx)) {
            rightIdx--;
        }
        if (leftIdx > rightIdx) {
            return true;
        }
        if (s[leftIdx].toLowerCase() === s[rightIdx].toLowerCase()) {
            leftIdx++;
            rightIdx--;
        } else {
            return false;
        }
    }
};