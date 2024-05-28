// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/14425/concise-o-log-n-binary-search-solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    // 下面的while循环总能让最小值位置包含在lo和hi的闭区间内，并且lo和hi的范围总是变小直至lo === hi === 最小值位置
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        // 注意这里nums[mid]是和nums[hi]比较，非常巧妙，我在这一行错了两次
        if (nums[mid] > nums[hi]) lo = mid + 1; // 这一步lo有可能变成最小值的位置
        else hi = mid; // 这一步hi可能变成最小值的位置
    }
    const minIdx = lo;
    // 这里的lo，hi是逻辑位置
    lo = 0;
    hi = nums.length - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let realMid = (mid + minIdx) % nums.length;
        if (nums[realMid] > target) hi = mid - 1;
        else if (nums[realMid] < target) lo = mid + 1;
        else return realMid;
    }
    return -1;
}