// https://leetcode.com/problems/find-a-peak-element-ii/description/
// https://leetcode.com/problems/find-a-peak-element-ii/solutions/1276556/java-python-c-clear-explanation-with-images-m-log-n-very-short-code

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    let loColIdx = 0;
    let hiColIdx = n - 1;
    function getMaxRowIdxOfCol(colIdx) {
        let max = 0;
        let maxIdx = -1;
        for (let i = 0; i < m; i++) {
            if (mat[i][colIdx] > max) {
                max = mat[i][colIdx];
                maxIdx = i;
            }
        }
        return maxIdx;
    }
    function getMatCellVal(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return Number.NEGATIVE_INFINITY;
        } else {
            return mat[i][j];
        }
    }
    while (loColIdx <= hiColIdx) {
        const midColIdx = loColIdx + Math.floor((hiColIdx - loColIdx) / 2);
        const maxRowIdxOfMidCol = getMaxRowIdxOfCol(midColIdx);
        if (
            getMatCellVal(maxRowIdxOfMidCol, midColIdx) > getMatCellVal(maxRowIdxOfMidCol, midColIdx - 1)
            && getMatCellVal(maxRowIdxOfMidCol, midColIdx) > getMatCellVal(maxRowIdxOfMidCol, midColIdx + 1)
        ) {
            return [maxRowIdxOfMidCol, midColIdx];
        } else if (getMatCellVal(maxRowIdxOfMidCol, midColIdx) < getMatCellVal(maxRowIdxOfMidCol, midColIdx + 1)) {
            loColIdx = midColIdx + 1;
        } else {
            hiColIdx = midColIdx - 1;
        }
    }
};