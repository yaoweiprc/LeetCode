// https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCountMap = {};
    for (let i = 0; i < magazine.length; i++) {
        if (letterCountMap[magazine[i]]) {
            letterCountMap[magazine[i]]++;
        } else {
            letterCountMap[magazine[i]] = 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {;
        if (!letterCountMap[ransomNote[i]]) {
            return false;
        } else {
            letterCountMap[ransomNote[i]]--;
        }
    }
    return true;
};