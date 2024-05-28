// https://leetcode.com/problems/longest-consecutive-sequence/description/
// https://leetcode.com/problems/longest-consecutive-sequence/solutions/41057/simple-o-n-with-explanation-just-walk-each-streak

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set();
    for (let num of nums) {
        set.add(num);
    }
    let maxLength = 0;
    for (let num of nums) {
        if (!set.has(num - 1)) {
            let count = 1;
            while (set.has(++num)) {
                count++;
            }
            maxLength = Math.max(count, maxLength);
        }
    }
    return maxLength;
};