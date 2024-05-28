// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const res = [];
    let idx1 = 0;
    let idx2 = 0;
    // 全部从nums1里面出
    while (idx1 < nums1.length && idx2 < nums2.length) {
        if (nums1[idx1] === nums2[idx2]) {
            res.push(nums1[idx1]);
            idx1++;
            idx2++;
        } else if (nums1[idx1] < nums2[idx2]) {
            idx1++;
        } else {
            idx2++;
        }
    }
    return res;
};