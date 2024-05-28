// https://leetcode.com/problems/sliding-window-maximum/description/
// https://www.youtube.com/watch?v=DfljaUwZsOk
// It's really error-prone

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [];
    const monotonicDecreasingQueue = [];
    for (let i = 0; i < nums.length; i++) {
        if (monotonicDecreasingQueue.length > 0) {
            while (monotonicDecreasingQueue[0] < (i - k + 1)) {
                monotonicDecreasingQueue.shift();
            }
        }
        while (monotonicDecreasingQueue.length > 0 && nums[i] >= nums[monotonicDecreasingQueue[monotonicDecreasingQueue.length - 1]]) {
            monotonicDecreasingQueue.pop();
        }
        monotonicDecreasingQueue.push(i);
        if (i >= k - 1) {
            res.push(nums[monotonicDecreasingQueue[0]]);
        }
    }
    return res;
};