// https://leetcode.com/problems/combination-sum-ii/description/
// https://leetcode.com/problems/permutations/solutions/18239/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partioning

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let resArr = [];
    let tmpArr = [];
    let sumOfTmpArr = 0;

    // 每次recursion增加一个数字
    // recursion函数在sumOfTmpArr>=target的时候返回true
    function recursion(idxToStart) {
        // sumOfTmpArr > target 的情况直接返回，没有必要递归
        if (sumOfTmpArr > target) return true;
        if (sumOfTmpArr === target) {
            // 注意这里要拷贝数组，我每次都错
            resArr.push([...tmpArr]);
            return true;
        }
        let i = idxToStart;
        // 现在sumOfTmpArr < target
        while (i < candidates.length) {
            // 这个数字在当前位用过，跳过
            if (i > idxToStart && candidates[i] === candidates[i - 1]) {
                i++;
                continue;
            }
            tmpArr.push(candidates[i]);
            sumOfTmpArr += candidates[i];
            let isGEThanTarget = recursion(i + 1);
            tmpArr.pop();
            sumOfTmpArr -= candidates[i];
            i++;
            // 因为candidates是按照升序排列的，如果当前位选择第i个数就达到或超过了target，i以后数就不用试了
            if (isGEThanTarget) break;
        }
        return false;
    }
    recursion(0);
    return resArr;
};

// console.log(combinationSum2([10,1,2,7,6,1,5], 8));