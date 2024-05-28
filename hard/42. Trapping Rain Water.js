// https://leetcode.com/problems/trapping-rain-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let leftMaxHeight = 0;
    let rightMaxHeight = 0;
    let leftIdx = 0;
    let rightIdx = height.length - 1;
    let sum = 0;
    while (leftIdx <= rightIdx) {
        // 右边更高，指针从左向右推进是安全的，因为水不会从右边流出来，只需要考虑水从左边流出来的情况
        // 左右max相等，左边已扫描的柱子不会比rightMaxHeight更高，也可以从左向右推进
        if (rightMaxHeight >= leftMaxHeight) {
            if (height[leftIdx] < leftMaxHeight) {
                sum += leftMaxHeight - height[leftIdx];
            } else {
                leftMaxHeight = height[leftIdx];
            }
            leftIdx++;
        }
        // 左边更高，指针从右往左推进，水不会从左边流出来，只需要考虑水从右边流出来的情况
        else {
            if (height[rightIdx] < rightMaxHeight) {
                sum += rightMaxHeight - height[rightIdx];
            } else {
                rightMaxHeight = height[rightIdx];
            }
            rightIdx--;
        }
    }
    return sum;
}

console.log(trap([4, 3, 3]));