// https://leetcode.com/problems/contiguous-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let currIdx = -1;
    let runningSum = 0;
    const sumToIdxMap = new Map();
    sumToIdxMap.set(runningSum, currIdx);
    let maxLength = 0;
    while (++currIdx < nums.length) {
        runningSum += (nums[currIdx] - 0.5);
        if (sumToIdxMap.has(runningSum)) {
            maxLength = Math.max(maxLength, currIdx - sumToIdxMap.get(runningSum));
        } else {
            sumToIdxMap.set(runningSum, currIdx);
        }
    }
    return maxLength;
};