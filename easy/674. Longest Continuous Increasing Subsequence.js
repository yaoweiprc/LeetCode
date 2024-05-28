// https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 1;
    let currCount = 1;
    let i = 1;
    while (i < nums.length) {
        if (nums[i] > nums[i - 1]) {
            currCount++;
        } else {
            max = Math.max(max, currCount);
            currCount = 1;
        }
        i++;
    }
    max = Math.max(max, currCount);
    return max;
};