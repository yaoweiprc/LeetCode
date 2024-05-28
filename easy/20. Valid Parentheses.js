// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const stack = [];
    for (let c of s) {
        if (!map[c]) {
            stack.push(c);
        } else {
            if (stack.pop() !== map[c]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};