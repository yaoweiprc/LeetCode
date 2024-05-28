// https://leetcode.com/problems/merge-sorted-array/description/
// https://leetcode.com/problems/merge-sorted-array/solutions/3436053/beats-100-best-c-java-python-and-javascript-solution-two-pointer-stl approach 2
// 这道题的关键是从大往小merge就不用aux array了

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0) {
        if (i < 0 || nums2[j] >= nums1[i]) {
            nums1[k--] = nums2[j--];
        } else {
            nums1[k--] = nums1[i--];
        }
    }
};