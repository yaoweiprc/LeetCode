// https://leetcode.com/problems/valid-sudoku/
// https://leetcode.com/problems/valid-sudoku/solutions/15464/my-short-solution-by-c-o-n2

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSeen = new Array(9);
    const columnSeen = new Array(9);
    const blockSeen = new Array(9);
    [rowSeen, columnSeen, blockSeen].forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Set();
        }
    });
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let char = board[i][j];
            if (char !== '.') {
                if (rowSeen[i].has(char))
                    return false;
                else
                    rowSeen[i].add(char);

                if (columnSeen[j].has(char))
                    return false;
                else
                    columnSeen[j].add(char);

                const blockIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (blockSeen[blockIdx].has(char))
                    return false;
                else
                    blockSeen[blockIdx].add(char);
            }
        }
    }
    return true;
};