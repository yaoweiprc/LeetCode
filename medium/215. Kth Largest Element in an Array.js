// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
        const r = Math.floor(Math.random() * (i + 1));
        swap(i, r);
    }
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        const pos = partition();
        if (pos < k) {
            lo = pos + 1;
        } else if (pos > k) {
            hi = pos - 1;
        } else {
            return nums[k];
        }
    }

    function partition() {
        if (lo === hi)
            return lo;
        let i = lo;
        let j = hi + 1;
        const v = nums[lo];
        while (true) {
            while (nums[++i] < v) {
                if (i > hi) {
                    break;
                }
            }
            while (nums[--j] > v) {}
            if (i >= j) {
                break;
            }
            swap(i, j);
        }
        swap(lo, j);
        return j;
    }

    function swap(i, j) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};