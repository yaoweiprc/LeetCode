// https://leetcode.com/problems/non-decreasing-array/description/
// https://leetcode.com/problems/non-decreasing-array/solutions/106826/java-c-simple-greedy-like-solution-with-explanation

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0;
    let i = 1;
    while (i < nums.length && count < 2) {
        if (nums[i - 1] > nums[i]) {
            count++;
            if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
                nums[i] = nums[i - 1];
            } else {
                nums[i - 1] = nums[i];
            }
        }

        i++;
    }
    return count <= 1;
};