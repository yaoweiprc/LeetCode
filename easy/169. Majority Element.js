// https://leetcode.com/problems/majority-element/description/
// https://leetcode.com/problems/majority-element/solutions/3676530/3-method-s-beats-100-c-java-python-beginner-friendly approach 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};