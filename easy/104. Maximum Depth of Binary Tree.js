// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;
    function recurse(root, currDepth) {
        if (root === null)
            return;
        currDepth++;
        if (maxDepth < currDepth) {
            maxDepth = currDepth;
        }
        recurse(root.left, currDepth);
        recurse(root.right, currDepth);
    }
    recurse(root, 0);
    return maxDepth;
};