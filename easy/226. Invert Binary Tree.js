// https://leetcode.com/problems/invert-binary-tree/description/

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    const invertedRight = invertTree(root.right);
    const invertedLeft = invertTree(root.left);
    root.left = invertedRight;
    root.right = invertedLeft;
    return root;
};