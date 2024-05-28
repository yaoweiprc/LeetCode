// https://leetcode.com/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const symbolMap = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    function getValByIdx(idx) {
        return symbolMap[s.charAt(idx)];
    }
    let res = 0;
    let i = 0;
    while (i < s.length) {
        if (i < s.length - 1 && getValByIdx(i) < getValByIdx(i + 1)) {
            res += getValByIdx(i + 1) - getValByIdx(i);
            i = i + 2;
        } else {
            res += getValByIdx(i);
            i++;
        }
    }
    return res;
}