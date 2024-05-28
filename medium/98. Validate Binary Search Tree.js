// https://leetcode.com/problems/validate-binary-search-tree/description/

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function recurseValidate(node, min, max) {
        if (node === null)
            return true;
        return (
            node.val > min && node.val < max
        ) && recurseValidate(node.left, min, node.val) && recurseValidate(node.right, node.val, max);
    }
    return recurseValidate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};