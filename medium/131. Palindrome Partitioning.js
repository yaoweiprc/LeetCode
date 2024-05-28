// https://leetcode.com/problems/palindrome-partitioning/description/
// https://leetcode.com/problems/permutations/solutions/18239/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partioning

/**
 * @param {string} oriStr
 * @return {string[][]}
 */
var partition = function(oriStr) {
    const oriStrLength = oriStr.length;
    const palindromeMemo = new Array(oriStrLength);
    for (let i = 0; i < palindromeMemo.length; i++) {
        palindromeMemo[i] = new Array(oriStrLength);
    }
    function memoizedIsPalindrome(start, end) {
        if (typeof palindromeMemo[start][end] === 'boolean') return palindromeMemo[start][end];
        let isPalindrome = true;
        let i = start, j = end;
        while (i < j) {
            if (oriStr[i++] !== oriStr[j--]) {
                isPalindrome = false;
                break;
            }
        }
        palindromeMemo[start][end] = isPalindrome;
        return isPalindrome;
    }
    let resArr = [];
    // 要保证tmpArr里的每个partition都是回文的
    let tmpArr = [];
    let usedLength = 0;
    function recursion() {
        if (usedLength === oriStrLength) {
            // 注意这里要拷贝数组，我每次都错
            resArr.push([...tmpArr]);
            return;
        }
        // 选tmpArr的下一个元素，下一个元素必须是回文的
        for (let i = usedLength; i < oriStrLength; i++) {
            if (memoizedIsPalindrome(usedLength, i)) {
                let substr = oriStr.substring(usedLength, i + 1);
                tmpArr.push(substr);
                usedLength = i + 1;
                recursion();
                tmpArr.pop();
                usedLength -= substr.length;
            }
        }
    }
    recursion();
    return resArr;
};