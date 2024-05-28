// https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
    nums.push(undefined);
    for (let i = 0; i < n + 1; i++) {
        while (nums[i] !== undefined && nums[i] !== i) {
            swap(i, nums[i]);
        }
    }
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    for (let i = 0; i < n + 1; i++) {
        if (nums[i] === undefined)
            return i;
    }
};