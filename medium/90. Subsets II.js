// https://leetcode.com/problems/subsets-ii/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const resArr = [];
    let tmpArr = [];
    nums.sort();
    function recursion(idxToStart) {
        // 注意这里要拷贝数组，我每次都错
        resArr.push([...tmpArr]);
        let i = idxToStart;
        while (i < nums.length) {
            if (i > idxToStart && nums[i] === nums[i - 1]) {
                i++;
                continue;
            }
            tmpArr.push(nums[i]);
            recursion(++i);
            tmpArr.pop();
        }
    }
    recursion(0);
    return resArr;
};