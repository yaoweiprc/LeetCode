// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {};
    for (let char of s) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }
    for (let char of t) {
        if (!map[char]) {
            return false;
        }
        map[char]--;
    }
    for (let char in map) {
        if (map[char] !== 0) {
            return false;
        }
    }
    return true;
};