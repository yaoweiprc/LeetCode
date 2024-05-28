// https://leetcode.com/problems/maximum-product-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = Number.MIN_SAFE_INTEGER;
    let prefixProduct = 1;
    let firstNegativeIdx = undefined;
    let prefixProductOfFirstNegativeIdx = undefined;
    let currIdx = 0;
    while (currIdx < nums.length) {
        const currNum = nums[currIdx];
        let currPosAsEndPosMaxProduct;
        if (currNum === 0) {
            currPosAsEndPosMaxProduct = 0;
            prefixProduct = 1;
            firstNegativeIdx = undefined;
            prefixProductOfFirstNegativeIdx = undefined;
        } else {
            prefixProduct *= currNum;
            if (prefixProduct > 0) {
                currPosAsEndPosMaxProduct = prefixProduct;
            } else {
                if (firstNegativeIdx !== undefined) {
                    currPosAsEndPosMaxProduct = prefixProduct / prefixProductOfFirstNegativeIdx;
                } else {
                    currPosAsEndPosMaxProduct = prefixProduct;
                }
            }
            if (firstNegativeIdx === undefined && currNum < 0) {
                firstNegativeIdx = currIdx;
                prefixProductOfFirstNegativeIdx = prefixProduct;
            }
        }

        maxProduct = Math.max(maxProduct, currPosAsEndPosMaxProduct);
        currIdx++;
    }
    return maxProduct;
};