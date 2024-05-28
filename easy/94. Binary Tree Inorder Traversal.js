// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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
var inorderTraversal = function(root) {
    const resArr = [];
    const stack = [];
    let currNode = root;
    while (true) {
        while (currNode !== null) {
            stack.push(currNode);
            currNode = currNode.left;
        }
        if (stack.length > 0) {
            let tmpNode = stack.pop();
            resArr.push(tmpNode.val);
            currNode = tmpNode.right;
        } else {
            break;
        }
    }
    return resArr;
};