// https://leetcode.com/problems/decode-ways/description/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let currCount = 0;
    let lastCount = 0;
    let secondLastCount = 0;
    for (let i = 0; i < s.length; i++) {
        currCount = 0;
        // 一位
        if (s[i] !== '0') {
            if (i > 0) {
                currCount += lastCount;
            } else {
                currCount += 1;
            }
        }
        // 两位
        if (i > 0) {
            const firstDigit = parseInt(s[i - 1], 10);
            const secondDigit = parseInt(s[i], 10);
            let isPastTwoDigitValid = false;
            if (firstDigit === 1) {
                isPastTwoDigitValid = true;
            } else if (firstDigit === 2) {
                if (secondDigit >= 0 && secondDigit <= 6) {
                    isPastTwoDigitValid = true;
                }
            }
            if (isPastTwoDigitValid) {
                if (i > 1) {
                    currCount += secondLastCount;
                } else {
                    currCount += 1;
                }
            }
        }
        secondLastCount = lastCount;
        lastCount = currCount;
    }
    return currCount;
};