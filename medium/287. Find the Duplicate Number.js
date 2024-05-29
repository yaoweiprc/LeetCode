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

// https://leetcode.com/problems/find-the-duplicate-number/solutions/1892921/9-approaches-count-hash-in-place-marked-sort-binary-search-bit-mask-fast-slow-pointers

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const n = nums.length - 1;
    let low = 1;
    let high = n;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        const count = getCountLessThanOrEqualToX(mid);
        if (count <= mid) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return high;

    function getCountLessThanOrEqualToX(x) {
        let count = 0;
        for (let num of nums) {
            if (num <= x)
                count++;
        }
        return count;
    }
}