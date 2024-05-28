// https://leetcode.com/problems/search-a-2d-matrix-ii/description/
// https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/66140/my-concise-o-m-n-java-solution

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ROW = matrix.length;
    let COL = matrix[0].length;
    let currRow = 0;
    let currCol = COL - 1;
    while (currRow < ROW && currCol >= 0) {
        const currCellVal = matrix[currRow][currCol];
        if (currCellVal === target)
            return true;
        else if (currCellVal > target)
            currCol--;
        else if (currCellVal <  target)
            currRow++;
    }
    return false;
};