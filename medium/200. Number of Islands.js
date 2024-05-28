// https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const m = grid.length;
    const n = grid[0].length;
    const marked = new Array(m);
    for (let i = 0; i < m; i++) {
        marked[i] = new Array(n);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                if (!marked[i][j]) {
                    dfs(i, j);
                    count++;
                }
            }
        }
    }
    function dfs(i, j) {
        marked[i][j] = true;
        for (let [k, l] of getAdj(i, j)) {
            if (!marked[k][l]) {
                dfs(k, l);
            }
        }
    }
    function getAdj(i, j) {
        return [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]].filter(([i, j]) =>
            i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === '1'
        );
    }

    return count;
};