// https://leetcode.com/problems/permutations-ii/description/
// https://leetcode.com/problems/permutations/solutions/18239/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partioning

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort();
    let resArr = [];
    let tmpArr = [];
    let leftEleCountMap = new Map();
    for (let num of nums) {
        if (leftEleCountMap.has(num)) {
            leftEleCountMap.set(num, leftEleCountMap.get(num) + 1);
        } else {
            leftEleCountMap.set(num, 1);
        }
    }
    // 每次recursion增加一个数字
    function recursion() {
        if (tmpArr.length === nums.length) {
            // 注意这里要拷贝数组，我每次都错
            resArr.push([...tmpArr]);
            return;
        }
        for (let [i, num] of nums.entries()) {
            // 这个数字用完了，跳过
            if (leftEleCountMap.get(num) === 0) continue;
            // 这个数字在当前位用过，跳过
            if (num === nums[i - 1]) continue;
            tmpArr.push(num);
            leftEleCountMap.set(num, leftEleCountMap.get(num) - 1);
            recursion();
            tmpArr.pop();
            leftEleCountMap.set(num, leftEleCountMap.get(num) + 1);
        }
    }
    recursion();
    return resArr;
};