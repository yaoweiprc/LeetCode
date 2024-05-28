// https://leetcode.com/problems/subsets/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [[]];
    function recurse(preArr, idx) {
        if (idx < nums.length) {
            recurse(preArr, idx + 1);
            preArr.push(nums[idx]);
            res.push([...preArr]);
            recurse(preArr, idx + 1);
            preArr.pop();
        }
    }
    recurse([], 0);
    return res;
};