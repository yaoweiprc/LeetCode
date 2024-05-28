// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
// best answer: Mark as seen by Negation
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1583736/c-python-all-6-solutions-w-explanations-binary-search-hashset-2x-o-1-space-approach

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let tmp;
    // 位置i应该保存 i+1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i + 1) continue;
        while (!(nums[i] === undefined || nums[i] === i + 1)) {
            // nums[i] 保存着错误的数
            if (nums[nums[i] - 1] === nums[i]) {
                nums[i] = undefined;
            } else {
                tmp = nums[nums[i] - 1];
                nums[nums[i] - 1] = nums[i];
                nums[i] = tmp;
            }
        }
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            res.push(i + 1);
        }
    }
    return res;
};