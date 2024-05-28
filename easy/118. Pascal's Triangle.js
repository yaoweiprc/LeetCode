// https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const resArr = [];
    for (let currRow = 0; currRow < numRows; currRow++) {
        let currRowArr = [];
        currRowArr.push(1);
        while (currRowArr.length < currRow + 1) {
            if (currRowArr.length === currRow) {
                currRowArr.push(1);
            } else {
                currRowArr.push(resArr[resArr.length - 1][currRowArr.length] + resArr[resArr.length - 1][currRowArr.length - 1]);
            }
        }
        resArr.push(currRowArr);
    }
    return resArr;
};