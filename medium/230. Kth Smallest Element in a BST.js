// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let retVal = undefined;
    function recurseCalcSize(root, k) {
        if (retVal !== undefined)
            return 0;
        if (!root)
            return 0;
        const leftTreeSize = recurseCalcSize(root.left, k);
        if (retVal !== undefined)
            return 0;
        if (leftTreeSize === k - 1 && retVal === undefined) {
            retVal = root.val;
            return 0;
        }
        const rightTreeSize = recurseCalcSize(root.right, k - leftTreeSize - 1);
        if (retVal !== undefined)
            return 0;
        return leftTreeSize + rightTreeSize + 1;
    }
    recurseCalcSize(root, k);
    return retVal;
};