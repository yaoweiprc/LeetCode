// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const seenNumSet = new Set();
    const firstTwoMap = new Map();
    const resArr = [];
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            const num3 = 0 - num1 - num2;
            if (seenNumSet.has(num3)) {
                const triple = [num1, num2, num3].sort((a, b) => a - b);
                if (firstTwoMap.has(triple[0])) {
                    const set = firstTwoMap.get(triple[0]);
                    if (!set.has(triple[1])) {
                        set.add(triple[1]);
                        resArr.push(triple);
                    }
                } else {
                    const set = new Set();
                    set.add(triple[1]);
                    firstTwoMap.set(triple[0], set);
                    resArr.push(triple);
                }
            }
        }
        seenNumSet.add(num1);
    }
    return resArr;
};