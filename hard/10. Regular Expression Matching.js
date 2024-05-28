// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} txt
 * @param {string} reStr
 * @return {boolean}
 */
function isMatch(txt, reStr) {
    const txtLength = txt.length;
    const reLength = reStr.length;
    const memo = [];
    for (let i  = 0; i < txtLength + 1; i++) {
        memo[i] = new Array(reLength + 1);
        memo[i][reLength] = false;
    }
    memo[txtLength][reLength] = true;0
    for (let i = txtLength; i >= 0; i--) {
        for (let j = reLength - 1; j >= 0; j--) {
            const currReChar = reStr[j];
            const isFirstMatch = (i < txtLength) && (txt[i] === currReChar || currReChar === '.');
            if ((j + 1) < reLength && reStr[j + 1] === '*') {
                memo[i][j] = memo[i][j + 2] || (isFirstMatch && memo[i + 1][j]);
            } else {
                memo[i][j] = isFirstMatch && memo[i + 1][j + 1];
            }
        }
    }
    return memo[0][0];
}

console.log(isMatch('aaa', 'ab*a*c*a'));