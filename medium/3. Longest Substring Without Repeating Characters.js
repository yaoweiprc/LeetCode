// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s) {
    const map = new Map();
    let maxLength = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];
        if (map.has(currChar)) {
            const lastCurrCharIndex = map.get(currChar);
            if (lastCurrCharIndex >= left) {
                left = lastCurrCharIndex + 1;
            }
        }
        map.set(currChar, i);
        maxLength = Math.max(i - left + 1, maxLength);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));