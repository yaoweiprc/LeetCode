// https://leetcode.com/problems/surrounded-regions/description/

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length;
    const n = board[0].length;
    function *getEdgeCell() {
        let currRow = 0;
        let currColumn = -1;
        while (currColumn + 1 < n) {
            yield [currRow, ++currColumn];
        }
        while (currRow + 1 < m) {
            yield [++currRow, currColumn];
        }
        while (currColumn - 1 >= 0) {
            yield [currRow, --currColumn];
        }
        while (currRow - 1 >= 1) {
            yield [--currRow, currColumn];
        }
    }
    for (let [row, col] of getEdgeCell()) {
        if (board[row][col] === 'O') {
            dfs(row, col);
        }
    }
    function dfs(row, col) {
        board[row][col] = 'C';
        if (row > 0 && board[row - 1][col] === 'O') {
            dfs(row - 1, col);
        }
        if (row < m - 1 && board[row + 1][col] === 'O') {
            dfs(row + 1, col);
        }
        if (col > 0 && board[row][col - 1] === 'O') {
            dfs(row, col - 1);
        }
        if (col < n - 1 && board[row][col + 1] === 'O') {
            dfs(row, col + 1);
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O')
                board[i][j] = 'X';
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'C')
                board[i][j] = 'O';
        }
    }
};