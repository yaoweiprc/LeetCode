// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let startIdx = -1;
    let endIdx = -1;
    if (nums.length === 0)
        return [startIdx, endIdx];
    if (nums[0] > target)
        return [startIdx, endIdx];
    if (nums[nums.length - 1] < target)
        return [startIdx, endIdx];
    if (nums[0] === target)
        startIdx = 0;
    if (nums[nums.length - 1] === target)
        endIdx = nums.length - 1;
    if (startIdx === -1) {
        let lo = 0;
        let hi = nums.length - 1;
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (nums[mid] === target && nums[mid - 1] !== target) {
                startIdx = mid;
                break;
            } else if (nums[mid] > target || (nums[mid] === target && nums[mid - 1] === target)) {
                hi = mid - 1;
            } else if (nums[mid] < target) {
                lo = mid + 1;
            }
        }
    }
    if (endIdx === -1) {
        let lo = 0;
        let hi = nums.length - 1;
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (nums[mid] === target && nums[mid + 1] !== target) {
                endIdx = mid;
                break;
            } else if (nums[mid] > target) {
                hi = mid - 1;
            } else if (nums[mid] < target || (nums[mid] === target && nums[mid + 1] === target)) {
                lo = mid + 1;
            }
        }
    }
    return [startIdx, endIdx];
};