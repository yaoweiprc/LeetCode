// https://leetcode.com/problems/partition-labels/description/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastPosOfCharMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const currChar = s.charAt(i);
        lastPosOfCharMap.set(currChar, i);
    }
    let currPartitionStartPos = 0;
    let currPos = 0;
    let currPartitionEndPos = 0;
    let resArr = [];
    while (currPos < s.length) {
        const currChar = s.charAt(currPos);
        const lastPosOfCurrChar = lastPosOfCharMap.get(currChar);
        if (lastPosOfCurrChar > currPartitionEndPos)
            currPartitionEndPos = lastPosOfCurrChar;
        if (currPos === currPartitionEndPos) {
            resArr.push(currPartitionEndPos - currPartitionStartPos + 1);
            currPartitionStartPos = currPos + 1;
        }
        currPos++;
    }
    return resArr;
};