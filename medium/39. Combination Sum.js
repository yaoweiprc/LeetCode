// https://leetcode.com/problems/combination-sum/description/
// https://leetcode.com/problems/permutations/solutions/18239/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partioning

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let resArr = [];
    let tmpArr = [];
    let sumOfTmpArr = 0;
    function recursion(idxToStart) {
        if (sumOfTmpArr > target) return true;
        if (sumOfTmpArr === target) {
            // 注意这里要拷贝数组，我每次都错
            resArr.push([...tmpArr]);
            return true;
        }
        while (idxToStart < candidates.length) {
            tmpArr.push(candidates[idxToStart]);
            sumOfTmpArr += candidates[idxToStart];
            let isGEThanTarget = recursion(idxToStart);
            tmpArr.pop();
            sumOfTmpArr -= candidates[idxToStart];
            idxToStart++;
            // 因为candidates是按照升序排列的，如果当前位选择第i个数就达到或超过了target，i以后数就不用试了
            if (isGEThanTarget) break;
        }
        return false;
    }
    recursion(0);
    return resArr;
};