// https://leetcode.com/problems/jump-game/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxIdxCanReach = 0;
    let currIdx = 0;
    for (; currIdx < nums.length && currIdx <= maxIdxCanReach; currIdx++) {
        maxIdxCanReach = Math.max(maxIdxCanReach, currIdx + nums[currIdx]);
    }
    return currIdx === nums.length;
};