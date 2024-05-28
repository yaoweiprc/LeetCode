// https://leetcode.com/problems/excel-sheet-column-number/description/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    function getDigitNum(char) {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    let currIdx = 0;
    while (currIdx < columnTitle.length) {
        res = res * 26 + getDigitNum(columnTitle.charAt(currIdx));
        currIdx++;
    }
    return res;
};