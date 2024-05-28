// https://leetcode.com/problems/top-k-frequent-words/description/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freqMap = new Map();
    for (let word of words) {
        if (freqMap.has(word)) {
            freqMap.set(word, freqMap.get(word) + 1);
        } else {
            freqMap.set(word, 1);
        }
    }
    const buckets = new Array(words.length + 1);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    for (let [num, freq] of freqMap) {
        buckets[freq].push(num);
    }
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort();
    }
    const resArr = [];
    for (let i = buckets.length - 1; i > 0 && resArr.length < k; i--) {
        for (let j = 0; j < buckets[i].length && resArr.length < k; j++) {
            resArr.push(buckets[i][j]);
        }
    }
    return resArr;
};