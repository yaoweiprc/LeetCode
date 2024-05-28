// https://leetcode.com/problems/move-zeroes/description/
// https://leetcode.com/problems/move-zeroes/solutions/172432/the-easiest-but-unusual-snowball-java-solution-beats-100-o-n-clear-explanation

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let snowballSize = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && snowballSize > 0) {
            nums[i - snowballSize] = nums[i];
            nums[i] = 0;
        } else if (nums[i] === 0) {
            snowballSize++;
        }
    }
};