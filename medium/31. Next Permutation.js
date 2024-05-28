// https://leetcode.com/problems/next-permutation/description/
// https://leetcode.com/problems/next-permutation/solutions/13867/c-from-wikipedia
// 我差点在第一次就找到了最优解

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(arr) {
    let idxToExchange = arr.length - 2;
    while (idxToExchange >= 0) {
        if (arr[idxToExchange] < arr[idxToExchange + 1]) break;
        idxToExchange--;
    }
    // 找到了从后往前第一个值变小的i，定义为idxToExchange，idxToExchange之后的数是从大到小排列的
    if (idxToExchange >= 0) {
        // 把idxToExchange和idxToExchange之后最后一个比它大的数交换
        let i = idxToExchange;
        while (arr[i + 1] > arr[idxToExchange]) {
            i++;
        }
        let tmp = arr[i];
        arr[i] = arr[idxToExchange];
        arr[idxToExchange] = tmp;
    }
    // 交换之后idxToExchange之后仍然是从大到小排列的，reverse这部分，变成从小到大排列
    let i = idxToExchange + 1;
    let j = arr.length - 1;
    while (i < j) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
        i++;
        j--;
    }
};