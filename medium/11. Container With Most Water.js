// https://leetcode.com/problems/container-with-most-water/description/
// https://leetcode.com/problems/container-with-most-water/solutions/6100/simple-and-clear-proof-explanation/

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let leftIdx = 0;
    let rightIdx = height.length - 1;
    let maxArea = 0;
    while (leftIdx < rightIdx) {
        maxArea = Math.max(maxArea, (rightIdx - leftIdx) * Math.min(height[leftIdx], height[rightIdx]));
        if (height[leftIdx] <= height[rightIdx]) {
            leftIdx++;
        } else {
            rightIdx--;
        }
    }
    return maxArea;
}