// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/1322101/c-java-python-maxheap-minheap-binary-search-picture-explain-clean-concise
// Solution 3: Binary Search

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        const count = countLessOrEqualThan(mid);
        if (count >= k) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return high;

    function countLessOrEqualThan(x) {
        let count = 0;
        let i = 0;
        let j = n - 1;
        while (j >= 0 && i < n) {
            while (j >= 0 && matrix[i][j] > x) {
                j--;
            }
            count += j + 1;
            i++;
        }
        return count;
    }
};