// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/87739/java-strict-o-n-two-pointer-solution

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let maxLength = 0;
    for (let maxUniqueCharNumInWindow = 1; maxUniqueCharNumInWindow <= 26; maxUniqueCharNumInWindow++) {
        let charNumNoLessThanK = 0;
        let uniqueCharNumInWindow = 0;
        let left = 0;
        let right = 0;
        const map = new Map();
        while (right < s.length) {
            let currChar = s[right];
            // 不是新字符
            if (map.has(currChar) && map.get(currChar) > 0) {
                map.set(currChar, map.get(currChar) + 1);
            }
            // 是新字符
            else {
                map.set(currChar, 1);
                uniqueCharNumInWindow++;
            }
            if (map.get(currChar) === k) {
                charNumNoLessThanK++;
            }

            // 从左边去掉多余的字符
            while (uniqueCharNumInWindow > maxUniqueCharNumInWindow) {
                const currLeftChar = s[left];
                map.set(currLeftChar, map.get(currLeftChar) - 1);
                if (map.get(currLeftChar) === k - 1) {
                    charNumNoLessThanK--;
                }
                if (map.get(currLeftChar) === 0) {
                    uniqueCharNumInWindow--;
                }
                left++;
            }

            if (charNumNoLessThanK === uniqueCharNumInWindow) {
                maxLength = Math.max(right - left + 1, maxLength);
            }
            right++;
        }
    }
    return maxLength;
};