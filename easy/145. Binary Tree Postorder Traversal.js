// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const resArr = [];
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let item = stack.pop();
        if (typeof item === 'number') {
            resArr.push(item);
        } else {
            if (item !== null) {
                stack.push(item.val);
                stack.push(item.right);
                stack.push(item.left);
            }
        }
    }
    return resArr;
};