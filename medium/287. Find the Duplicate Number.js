// https://leetcode.com/problems/find-the-duplicate-number/
// https://leetcode.com/problems/find-the-duplicate-number/solutions/72846/my-easy-understood-solution-with-o-n-time-and-o-1-space-without-modifying-the-array-with-clear-explanation

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast)
    fast = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};