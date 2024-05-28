// https://leetcode.com/problems/longest-repeating-character-replacement/
// https://leetcode.com/problems/longest-repeating-character-replacement/solutions/91271/java-12-lines-o-n-sliding-window-solution-with-explanation

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0;
    let left = 0;
    let right = 0;
    let frequencyOfMostOccurringCharInSlidingWindow = 0;
    const countArr = (new Array(26)).fill(0);
    while (right < s.length) {
        countArr[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
        frequencyOfMostOccurringCharInSlidingWindow = Math.max(...countArr);
        while (right - left + 1 - frequencyOfMostOccurringCharInSlidingWindow > k) {
            countArr[s.charCodeAt(left++) - 'A'.charCodeAt(0)]--;
            frequencyOfMostOccurringCharInSlidingWindow = Math.max(...countArr);
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};