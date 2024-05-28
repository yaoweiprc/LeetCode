// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

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
var preorderTraversal = function(root) {
    const resArr = [];
    const stack = [];
    stack.push(root);
    let currNode;
    while (stack.length > 0) {
        currNode = stack.pop();
        while (currNode) {
            resArr.push(currNode.val);
            stack.push(currNode.right);
            currNode = currNode.left;
        }
    }
    return resArr;
};