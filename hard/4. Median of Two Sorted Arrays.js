// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

function findMedianSortedArrays(arr1, arr2) {
    const totalLength = arr1.length + arr2.length;
    if (totalLength % 2 === 0) {
        return (findKthNum(totalLength / 2, arr1, arr2) + findKthNum(totalLength / 2 - 1, arr1, arr2)) / 2;
    } else {
        return findKthNum(Math.floor(totalLength / 2), arr1, arr2);
    }
}

function findKthNum(k, arr1, arr2) {
    if (arr1.length === 0) {
        return arr2[k];
    }
    if (arr2.length === 0) {
        return arr1[k];
    }
    const arr1MidIndex = Math.floor(arr1.length / 2);
    const arr2MidIndex = Math.floor(arr2.length / 2);
    const arr1MidValue = arr1[arr1MidIndex];
    const arr2MidValue = arr2[arr2MidIndex];
    if (k > (arr1MidIndex + arr2MidIndex)) {
        if (arr1MidValue < arr2MidValue) {
            return findKthNum(k - arr1MidIndex - 1, arr1.slice(arr1MidIndex + 1), arr2);
        } else {
            return findKthNum(k - arr2MidIndex - 1, arr1, arr2.slice(arr2MidIndex + 1));
        }
    } else {
        if (arr1MidValue < arr2MidValue) {
            return findKthNum(k, arr1, arr2.slice(0, arr2MidIndex));
        } else {
            return findKthNum(k, arr1.slice(0, arr1MidIndex), arr2);
        }
    }
}