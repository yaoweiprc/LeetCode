// https://leetcode.com/problems/permutations/description/
// https://leetcode.com/problems/permutations/solutions/18239/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partioning
// 这个算法成本超高，recursion执行O(n!)，n是输入nums的长度.但已经是最优解，因为不同的排列结果就有n!种

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let resArr = [];
    let tmpArr = [];
    let tmpArrEleSet = new Set();
    // 每次recursion增加一个数字
    function recursion() {
        if (tmpArr.length === nums.length) {
            // 注意这里要拷贝数组，我每次都错
            resArr.push([...tmpArr]);
            return;
        }
        for (let num of nums) {
            if (tmpArrEleSet.has(num)) continue;
            tmpArr.push(num);
            tmpArrEleSet.add(num);
            recursion();
            tmpArr.pop();
            tmpArrEleSet.delete(num);
        }
    }
    recursion();
    return resArr;
};

