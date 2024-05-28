// https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (freqMap.has(char)) {
            freqMap.set(char, freqMap.get(char) + 1);
        } else {
            freqMap.set(char, 1);
        }
    }
    const buckets = new Array(s.length + 1);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = new Set();
    }
    for (let [char, freq] of freqMap) {
        buckets[freq].add(char);
    }
    const resArr = [];
    for (let i = buckets.length - 1; i > 0; i--) {
        for (let char of buckets[i]) {
            resArr.push(...((new Array(i)).fill(char)));
        }
    }
    return resArr.join('');
};