// https://leetcode.com/problems/rotate-image/description/
// https://leetcode.com/problems/rotate-image/solutions/18872/a-common-method-to-rotate-the-image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    matrix.reverse();
    const n = matrix.length;
    for (i = 0; i < n; i++) {
        // 注意这里j要从i+1开始
        for (j = i + 1; j < n; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
};

var rotateAntiClockwise = function(matrix) {
    const n = matrix.length;
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    matrix.reverse();
};