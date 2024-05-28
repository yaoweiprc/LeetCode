// https://leetcode.com/problems/count-and-say/description/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let lastSay = '1';
    let i = 1;
    while (i < n) {
        const nextSayArr = [];
        let start = 0;
        let nextCharIdx = 1;
        while (nextCharIdx < lastSay.length) {
            if (lastSay.charAt(nextCharIdx) !== lastSay.charAt(nextCharIdx - 1)) {
                nextSayArr.push(nextCharIdx - start, lastSay.charAt(nextCharIdx - 1));
                start = nextCharIdx;
            }
            nextCharIdx++;
        }
        nextSayArr.push(nextCharIdx - start, lastSay.charAt(nextCharIdx - 1));
        lastSay = nextSayArr.join('');
        i++;
    }
    return lastSay;
};