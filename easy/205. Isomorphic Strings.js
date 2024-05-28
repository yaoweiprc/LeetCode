// https://leetcode.com/problems/isomorphic-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    let reverseMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            if (reverseMap[t[i]]) {
                return false;
            }
            map[s[i]] = t[i];
            reverseMap[t[i]] = s[i];
        } else if (map[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
};