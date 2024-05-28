// https://leetcode.com/problems/minesweeper/description/

/**
 * @param {string[][]} board
 * @param {number[]} click
 * @return {string[][]}
 */
var updateBoard = function(board, click) {
    const clickRow = click[0];
    const clickColumn = click[1];
    const m = board.length;
    const n = board[0].length;
    function getAdjPos(i, j) {
        const adjPos = [];
        if (i > 0) {
            if (j > 0) {
                adjPos.push([i - 1, j - 1]);
            }
            adjPos.push([i - 1, j]);
            if (j < n - 1) {
                adjPos.push([i - 1, j + 1]);
            }
        }
        if (j > 0) {
            adjPos.push([i, j - 1]);
        }
        if (j < n - 1) {
            adjPos.push([i, j + 1]);
        }
        if (i < m - 1) {
            if (j > 0) {
                adjPos.push([i + 1, j - 1]);
            }
            adjPos.push([i + 1, j]);
            if (j < n - 1) {
                adjPos.push([i + 1, j + 1]);
            }
        }
        return adjPos;
    }
    function sweep(i, j) {
        if (board[i][j] === 'E') {
            const adjPos = getAdjPos(i, j);
            const adjMinePos = adjPos.filter(([i, j]) => board[i][j] === 'M');
            if (adjMinePos.length > 0) {
                board[i][j] = adjMinePos.length.toString();
            } else {
                board[i][j] = 'B';
                adjPos.forEach(([i, j]) => sweep(i, j));
            }
        }
    }
    if (board[clickRow][clickColumn] === 'M') {
        board[clickRow][clickColumn] = 'X';
    } else {
        sweep(clickRow, clickColumn);
    }
    return board;
};