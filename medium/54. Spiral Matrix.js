// https://leetcode.com/problems/spiral-matrix/description/
// https://leetcode.com/problems/spiral-matrix/solutions/20599/super-simple-and-easy-to-understand-solution

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const resArr = [];
    let leftBorder = 0;
    let rightBorder = matrix[0].length - 1;
    let topBorder = 0;
    let bottomBorder = matrix.length - 1;
    while (leftBorder <= rightBorder && topBorder <= bottomBorder) {
        if (topBorder <= bottomBorder) {
            for (let j = leftBorder; j <= rightBorder; j++) {
                resArr.push(matrix[topBorder][j]);
            }
        }
        topBorder++;
        if (rightBorder >= leftBorder) {
            for (let i = topBorder; i <= bottomBorder; i++) {
                resArr.push(matrix[i][rightBorder]);
            }
        }
        rightBorder--;
        if (bottomBorder >= topBorder) {
            for (let j = rightBorder; j >= leftBorder; j--) {
                resArr.push(matrix[bottomBorder][j]);
            }
        }
        bottomBorder--;
        if (rightBorder >= leftBorder) {
            for (let i = bottomBorder; i >= topBorder; i--) {
                resArr.push(matrix[i][leftBorder]);
            }
        }
        leftBorder++;
    }
    return resArr;
};