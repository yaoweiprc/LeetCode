/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * https://leetcode.com/problems/maximum-subarray/solutions/20193/dp-solution-some-thoughts/
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    // arr[i] 表示的是在 1.子数组必须以num[i]元素作为结尾 2.元素值之和最大的子数组的元素值之和
    // arr的元素满足这种关系 arr[i] = (arr[i - 1] > 0 ? arr[i - 1] : 0) + nums[i]
    const arr = [];
    arr[0] = nums[0];
    let maxSum = arr[0];
    for (let i = 1; i < nums.length; i++) {
        arr[i] = (arr[i - 1] > 0 ? arr[i - 1] : 0) + nums[i];
        if (maxSum < arr[i]) {
            maxSum = arr[i];
        }
    }
    return maxSum;
}