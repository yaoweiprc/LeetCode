// https://leetcode.com/problems/4sum-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = new Map();
    for (let num1 of nums1) {
        for (let num2 of nums2) {
            const sum = num1 + num2;
            let count = 0;
            if (map.has(sum))
                count = map.get(sum);
            map.set(sum, count + 1);
        }
    }
    let ret = 0;
    for (let num3 of nums3) {
        for (let num4 of nums4) {
            const theOtherSum = 0 - (num3 + num4);
            if (map.has(theOtherSum))
                ret += map.get(theOtherSum);
        }
    }
    return ret;
};