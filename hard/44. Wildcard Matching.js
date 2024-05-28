// https://leetcode.com/problems/wildcard-matching/description/
// 有更好的方法，但是都不好理解，我这个是O(mn)的方法
// 这个题类似 https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const strLength = s.length;
    const patternLength = p.length;
    const matrix = new Array(strLength + 1);
    for (let i = 0; i < strLength + 1; i++) {
        matrix[i] = new Array(patternLength + 1);
        matrix[i][patternLength] = false;
    }
    matrix[strLength][patternLength] = true;
    for (let i = strLength; i >= 0; i--) {
        for (let j = patternLength - 1; j >= 0; j--) {
            const currPatternChar = p[j];
            if (i === strLength) {
                if (currPatternChar !== '*') {
                    matrix[i][j] = false;
                } else {
                    matrix[i][j] = matrix[i][j + 1];
                }
            } else {
                const currStrChar = s[i];
                if (currPatternChar === '*') {
                    matrix[i][j] = matrix[i + 1][j] || matrix[i][j + 1];
                } else {
                    if (currPatternChar === '?' || currPatternChar === currStrChar) {
                        matrix[i][j] = matrix[i + 1][j + 1];
                    } else {
                        matrix[i][j] = false;
                    }
                }
            }
        }
    }
    return matrix[0][0];
};