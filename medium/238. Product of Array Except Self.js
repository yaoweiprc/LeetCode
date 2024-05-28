// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ansArr = new Array(nums.length);
    let curr = 1;
    for (let i = 0; i < nums.length; i++) {
        curr = curr * (i === 0 ? 1 : nums[i - 1]);
        ansArr[i] = curr;
    }
    curr = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        curr = curr * (i === nums.length - 1 ? 1 : nums[i + 1]);
        ansArr[i] = curr * ansArr[i];
    }
    return ansArr;
};