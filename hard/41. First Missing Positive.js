// https://leetcode.com/problems/first-missing-positive/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    nums[n] = undefined;
    for (let i = 0; i < n; i++) {
        while (!(nums[i] === undefined || nums[i] === i)) {
            if (nums[i] >= 1 && nums[i] <= n) {
                if (nums[nums[i]] === nums[i]) {
                    nums[i] = undefined;
                } else {
                    let tmp = nums[nums[i]];
                    nums[nums[i]] = nums[i];
                    nums[i] = tmp;
                }
            } else {
                nums[i] = undefined;
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        if (nums[i] === undefined) {
            return i;
        }
    }
    return n + 1;
};