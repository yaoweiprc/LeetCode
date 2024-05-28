// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const valToIdxInInOrderArr = {};
    for (let i = 0; i < inorder.length; i++) {
        valToIdxInInOrderArr[inorder[i]] = i;
    }
    function recurse(preOrderStart, preOrderEnd, inOrderStart, inOrderEnd) {
        if (preOrderEnd < preOrderStart) {
            return null;
        }
        const rootVal = preorder[preOrderStart];
        const rootIdxInInOrderArr = valToIdxInInOrderArr[rootVal];
        const leftTreeLength = rootIdxInInOrderArr - inOrderStart;
        const rightTreeLength = inOrderEnd - rootIdxInInOrderArr;
        const node = new TreeNode(
            rootVal,
            recurse(preOrderStart + 1, preOrderStart + leftTreeLength, inOrderStart, rootIdxInInOrderArr - 1),
            recurse(preOrderStart + leftTreeLength + 1, preOrderStart + leftTreeLength + rightTreeLength, rootIdxInInOrderArr + 1, inOrderEnd)
        );
        return node;
    }

    return recurse(0, preorder.length - 1, 0, inorder.length - 1);
};