// https://leetcode.com/problems/set-matrix-zeroes/description/
// https://leetcode.com/problems/set-matrix-zeroes/solutions/26014/any-shorter-o-1-space-solution

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let isFirstColZero = false;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                if (j === 0)
                    isFirstColZero = true;
                else
                    matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0) {
                matrix[i][j] = 0;
            } else if (j === 0) {
                if (isFirstColZero) {
                    matrix[i][j] = 0;
                }
            } else if (matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    if (isFirstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};