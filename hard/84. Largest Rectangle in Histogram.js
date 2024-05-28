// https://leetcode.com/problems/largest-rectangle-in-histogram/description/
// https://youtu.be/zx5Sw9130L0?si=20WCPRSqE3tu3Dmh

/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
    let max = 0;
    // stack里每一项的height始终是单调递增的
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        let startIdx = i;
        while (stack.length > 0 && heights[i] <= stack[stack.length - 1].height) {
            max = Math.max(max, stack[stack.length - 1].height * (i - stack[stack.length - 1].startIdx));
            startIdx = stack[stack.length - 1].startIdx;
            stack.pop();
        }
        stack.push({
            height: heights[i],
            startIdx,
        });
    }
    while (stack.length > 0) {
        max = Math.max(max, stack[stack.length - 1].height * (heights.length - stack[stack.length - 1].startIdx));
        stack.pop();
    }
    return max;
};