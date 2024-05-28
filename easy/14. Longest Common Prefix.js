// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let lcp = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < lcp.length && j < strs[i].length && lcp[j] === strs[i][j]) {
            j++;
        }
        lcp = lcp.substring(0, j);
    }
    return lcp;
}