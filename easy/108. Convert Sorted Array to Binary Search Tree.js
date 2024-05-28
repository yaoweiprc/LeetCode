// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return insert(nums, 0, nums.length - 1);
};

function insert(a, lo, hi) {
    if (hi < lo) return null;
    if (hi === lo) return new TreeNode(a[lo]);
    const mid = Math.floor((lo + hi) / 2);
    const root = new TreeNode(a[mid]);
    root.left = insert(a, lo, mid - 1);
    root.right = insert(a, mid + 1, hi);
    return root;
}