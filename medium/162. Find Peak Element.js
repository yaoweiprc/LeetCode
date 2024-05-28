// https://leetcode.com/problems/find-peak-element/description/
// 2024.3.21微软一面题目

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const oriLength = nums.length;
    let lo = 0;
    let hi = oriLength - 1;

    nums[-1] = Number.NEGATIVE_INFINITY;
    nums[oriLength] = Number.NEGATIVE_INFINITY;

    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid + 1] > nums[mid]) {
            lo = mid + 1;
        } else if (nums[mid - 1] > nums[mid]) {
            hi = mid - 1;
        }
    }
};