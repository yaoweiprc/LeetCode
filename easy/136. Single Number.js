// https://leetcode.com/problems/single-number/description/
// https://leetcode.com/problems/single-number/solutions/42997/my-o-n-solution-using-xor

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ret = 0;
    for (let num of nums) {
        ret ^= num;
    }
    return ret;
};