// https://leetcode.com/problems/word-search/description/

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    function getAdjacentCell(i, j) {
        const retArr = [];
        if (i > 0) {
            retArr.push([i - 1, j]);
        }
        if (i < m - 1) {
            retArr.push([i + 1, j]);
        }
        if (j > 0) {
            retArr.push([i, j - 1]);
        }
        if (j < n - 1) {
            retArr.push([i, j + 1]);
        }
        return retArr;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                const markMatrix = new Array(m);
                for (let k = 0; k < m; k++) {
                    markMatrix[k] = new Array(n).fill(false);
                }

                if (dfs(i, j, 1)) {
                    return true;
                } else {
                    // continue
                }

                function dfs(i, j, idxInWord) {
                    markMatrix[i][j] = true;
                    if (idxInWord >= word.length) {
                        markMatrix[i][j] = false;
                        return true;
                    }
                    let ret = false;
                    for (let [row, col] of getAdjacentCell(i, j)) {
                        if (ret)
                            break;
                        if (!markMatrix[row][col] && board[row][col] === word[idxInWord]) {
                            ret = dfs(row, col, idxInWord + 1) || ret;
                        }
                    }
                    markMatrix[i][j] = false;
                    return ret;
                }
            }
        }
    }
    return false;
};