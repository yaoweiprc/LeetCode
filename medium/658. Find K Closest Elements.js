// https://leetcode.com/problems/find-k-closest-elements/description/
// best answer: https://leetcode.com/problems/find-k-closest-elements/solutions/202785/very-simple-java-o-n-solution-using-two-pointers

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (rightIdx - leftIdx + 1 > k) {
        if (Math.abs(arr[leftIdx] - x) <= Math.abs(arr[rightIdx] - x)) {
            rightIdx--;
        } else {
            leftIdx++;
        }
    }
    return arr.slice(leftIdx, rightIdx + 1);
}

// my dummy answer

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
/*
var findClosestElements = function(arr, k, x) {
    const oriArrLength = arr.length;
    arr[-1] = Number.MIN_SAFE_INTEGER;
    arr[arr.length] = Number.MAX_SAFE_INTEGER;
    function findClosestIdxPair(lo, hi) {
        if (hi === lo + 1) {
            if (arr[lo] === x) {
                return [lo];
            } else if (arr[hi] === x) {
                return [hi];
            } else {
                return [lo, hi];
            }
        } else {
            const mid = lo + Math.floor((hi - lo) / 2);
            if (arr[mid] === x) {
                return [mid];
            } else if (arr[mid] < x) {
                return findClosestIdxPair(mid, hi);
            } else {
                return findClosestIdxPair(lo, mid);
            }
        }
    }
    const closestIdxArr = findClosestIdxPair(-1, oriArrLength);
    let leftIdx;
    let rightIdx;
    let resArr = [];
    if (closestIdxArr.length === 1) {
        const xIdx = closestIdxArr[0];
        leftIdx = xIdx - 1;
        rightIdx = xIdx + 1;
        resArr.push(x);
    } else {
        leftIdx = closestIdxArr[0];
        rightIdx = closestIdxArr[1];
    }
    while (resArr.length < k && !(leftIdx === -1 && rightIdx === oriArrLength)) {
        if (x - arr[leftIdx] <= arr[rightIdx] - x) {
            resArr.unshift(arr[leftIdx]);
            leftIdx--;
        } else {
            resArr.push(arr[rightIdx]);
            rightIdx++;
        }
    }
    return resArr;
};*/
