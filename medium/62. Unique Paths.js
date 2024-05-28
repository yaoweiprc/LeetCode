// https://leetcode.com/problems/unique-paths/description/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    const cache = new Array(m);
    for (let i = 0; i < m; i++) {
        cache[i] = new Array(n).fill(0);
    }
    cache[0][0] = 1;

    function recurse(m, n) {
        if (cache[m - 1][n - 1]) {
            return cache[m - 1][n - 1];
        }
        let pathCount = 0;
        if (m > 1) {
            pathCount += recurse(m - 1, n);
        }
        if (n > 1) {
            pathCount += recurse(m, n - 1);
        }
        cache[m - 1][n - 1] = pathCount;
        return pathCount;
    }

    return recurse(m, n);
};