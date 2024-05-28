// https://leetcode.com/problems/minimum-window-substring/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minWindowLength = Number.MAX_SAFE_INTEGER;
    let minStartIdx, minEndIdx;
    // t里面的字符减去slidingWindow里的字符
    const map = new Map();
    for (let char of t) {
        if (map.has(char))
            map.set(char, map.get(char) + 1);
        else
            map.set(char, 1);
    }
    // t里面的字符减去slidingWindow里的字符
    let count = 0;
    for (let [char, charCount] of map) {
        count += charCount;
    }
    let startIdx = 0;
    let endIdx = 0;
    while (endIdx < s.length) {
        const currChar = s[endIdx];
        if (map.has(currChar)) {
            map.set(currChar, map.get(currChar) - 1);
            if (map.get(currChar) >= 0) {
                count--;
            }
        }
        // 从右边开始删除没用的字符
        while (true) {
            if (startIdx > endIdx) {
                break;
            }
            const currStartChar = s[startIdx];
            if (map.has(currStartChar)) {
                if (map.get(currStartChar) >= 0) {
                    break;
                } else {
                    startIdx++;
                    map.set(currStartChar, map.get(currStartChar) + 1);
                }
            } else {
                startIdx++;
            }
        }
        // 这里startIdx可能比endIdx大
        if (count === 0) {
            const newLength = endIdx - startIdx + 1;
            if (newLength < minWindowLength) {
                minWindowLength = newLength;
                minStartIdx = startIdx;
                minEndIdx = endIdx;
            }
        }
        endIdx++;
    }
    if (minWindowLength < Number.MAX_SAFE_INTEGER) {
        return s.substring(minStartIdx, minEndIdx + 1);
    } else {
        return '';
    }
};