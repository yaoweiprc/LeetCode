// https://leetcode.com/problems/sort-colors/description/
// 这个题有坑，注意i===j-1的情况

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 最后一个0的位置
    let i = -1;
    // 下一个待检查的位置
    let j = 0;
    // 第一个2的位置
    let k = nums.length;
    while (j < k) {
        if (nums[j] === 0) {
            // 一定要注意i === j - 1的情况，这个时候检查过的元素里面没有1
            if (i === j - 1) {
                i++;
                j++;
            } else {
                nums[++i] = 0;
                nums[j++] = 1;
            }
        } else if (nums[j] === 1) {
            j++;
        } else {
            nums[j] = nums[--k];
            nums[k] = 2;
        }
    }
};