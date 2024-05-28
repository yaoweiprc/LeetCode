// https://leetcode.com/problems/number-of-provinces/description/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const marked = new Array(n).fill(false);
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!marked[i]) {
            count++;
            dfs(i);
        }
    }
    function dfs(v) {
        marked[v] = true;
        for (let w = 0; w < n; w++) {
            if (isConnected[v][w] && !marked[w]) {
                dfs(w);
            }
        }
    }
    return count;
};