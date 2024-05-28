// https://leetcode.com/problems/top-k-frequent-elements/description/
// bucket sort

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    for (let num of nums) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }
    const buckets = new Array(nums.length + 1);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    for (let [num, freq] of freqMap) {
        buckets[freq].push(num);
    }
    const resArr = [];
    for (let i = buckets.length - 1; i > 0 && resArr.length < k; i--) {
        resArr.push(...(buckets[i]));
    }
    return resArr;
};