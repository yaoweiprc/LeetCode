// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
// https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/39775/accepted-short-solution-in-java

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
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;

    function recurse(node) {
        if (node === null)
            return 0;
        const leftChildMaxPathSum = recurse(node.left);
        const rightChildMaxPathSum = recurse(node.right);
        max = Math.max(max, node.val + Math.max(0, leftChildMaxPathSum) + Math.max(0, rightChildMaxPathSum));
        return node.val + Math.max(0, leftChildMaxPathSum, rightChildMaxPathSum);
    }

    recurse(root);

    return max;
};