// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) return;
    reverseArray(nums, 0, nums.length - 1);
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, nums.length - 1);
};

function reverseArray(a, lo, hi) {
    while (lo < hi) {
        let tmp = a[lo];
        a[lo] = a[hi];
        a[hi] = tmp;
        lo++;
        hi--;
    }
}