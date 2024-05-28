// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
// 只要想到深度优先遍历立马就有思路，但是我第一次做没想到

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const resArr = [];
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const length = queue.length;
        const tmpArr = [];
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (node) {
                tmpArr.push(node.val);
                queue.push(node.left, node.right);
            }
        }
        if (tmpArr.length > 0)
            resArr.push(tmpArr);
    }
    return resArr;
};