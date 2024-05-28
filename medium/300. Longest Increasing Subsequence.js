// https://leetcode.com/problems/longest-increasing-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
    const arr = [];
    for (let num of nums) {
        if (arr.length === 0 || num > arr[arr.length - 1]) {
            arr.push(num);
        } else {
            const idx = findFirstGEIdx(arr, num);
            arr[idx] = num;
        }
    }
    function findFirstGEIdx(arr, num) {
        let lo = 0;
        let hi = arr.length - 1;
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (arr[mid] >= num) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return hi;
    }
    return arr.length;
};

/*
var lengthOfLIS = function(nums) {
    const arr = (new Array(nums.length)).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && arr[j] + 1 > arr[i]) {
                arr[i] = arr[j] + 1;
            }
        }
    }
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
};*/
