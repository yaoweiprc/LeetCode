// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let exchIdx = 1;
    let currIdx = 1;
    let count = 1;
    let prevEle = nums[0];
    while (currIdx < nums.length) {
        if (nums[currIdx] !== prevEle) {
            count++;
            prevEle = nums[currIdx];
            const tmp = nums[currIdx];
            nums[currIdx] = nums[exchIdx];
            nums[exchIdx] = tmp;
            exchIdx++;
        }
        currIdx++;
    }
    return count;
};