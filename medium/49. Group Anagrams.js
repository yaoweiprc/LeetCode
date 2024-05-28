// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    strs.forEach(str => {
        const sorted = str.split('').sort().join('');
        if (!map[sorted]) map[sorted] = [];
        map[sorted].push(str);
    });
    return Object.values(map);
};