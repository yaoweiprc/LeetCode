// https://leetcode.com/problems/longest-valid-parentheses/description/
// https://leetcode.com/problems/longest-valid-parentheses/solutions/14126/my-o-n-solution-using-a-stack

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(str) {
    const stack = [];
    function top() {
        return stack[stack.length - 1];
    }
    for (let i = 0; i < str.length; i++) {
        const isCurrCharLeft = str[i] === '(';
        if (isCurrCharLeft) {
            stack.push(i);
        } else {
            if (str[top()] === '(') {
                stack.pop();
            } else {
                stack.push(i);
            }
        }
    }
    // str整体平衡
    if (stack.length === 0) {
        return str.length;
    }
    let maxLeftIdx = 0;
    let maxRightIdxPlusOne = stack[0];
    for (let i = 0; i < stack.length - 1; i++) {
        const currIdx = stack[i];
        const nextIdx = stack[i + 1];
        if (nextIdx - currIdx + 1 > maxRightIdxPlusOne - maxLeftIdx) {
            maxLeftIdx = currIdx + 1;
            maxRightIdxPlusOne = nextIdx;
        }
    }
    if (str.length - 1 - top() > maxRightIdxPlusOne - maxLeftIdx) {
        maxLeftIdx = top() + 1;
        maxRightIdxPlusOne = str.length;
    }
    return maxRightIdxPlusOne - maxLeftIdx;
}

console.log(longestValidParentheses('()'));