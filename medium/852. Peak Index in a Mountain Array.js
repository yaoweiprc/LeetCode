// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    if (arr[0] > arr[1]) return 0;
    if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1;
    let lo = 0;
    let hi = arr.length - 1;
    let mid;
    while (true) {
        mid = Math.floor((lo + hi) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if ((mid - 1 >= 0 && arr[mid] > arr[mid - 1]) || (mid + 1 < arr.length && arr[mid] < arr[mid + 1])) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
};