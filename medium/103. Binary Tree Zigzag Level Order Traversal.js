// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

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
var zigzagLevelOrder = function(root) {
    let nextRowDirectionRight = true;
    const resArr = [];
    let nextLevelHead = root;
    while (nextLevelHead) {
        let currLevelArr = [];
        let currNode = nextLevelHead;
        nextLevelHead = null;
        while (currNode) {
            currLevelArr.push(currNode.val);
            let childrenArr;
            if (nextRowDirectionRight) {
                childrenArr = [currNode.left, currNode.right];
            } else {
                childrenArr = [currNode.right, currNode.left];
            }
            childrenArr.filter(Boolean).forEach(node => {
                node.next = nextLevelHead;
                nextLevelHead = node;
            });
            currNode = currNode.next;
        }
        resArr.push(currLevelArr);
        nextRowDirectionRight = !nextRowDirectionRight;
    }
    return resArr;
};