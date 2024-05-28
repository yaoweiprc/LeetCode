// https://leetcode.com/problems/symmetric-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*var isSymmetric = function(root) {
    function recurseValidate(node1, node2) {
        if (node1 === null && node2 === null)
            return true;
        if (node1 === null || node2 === null)
            return false;
        if (node1.val !== node2.val)
            return false;
        return recurseValidate(node1.left, node2.right) && recurseValidate(node1.right, node2.left);
    }
    return recurseValidate(root.left, root.right);
};*/


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let currLeftNode = root.left;
    let currRightNode = root.right;
    const stack = [];
    while (true) {
        if (currLeftNode === null || currRightNode === null) {
            if (currLeftNode === null && currRightNode === null) {
                if (stack.length > 0) {
                    [currLeftNode, currRightNode] = stack.pop();
                    currLeftNode = currLeftNode.right;
                    currRightNode = currRightNode.left;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (currLeftNode.val === currRightNode.val) {
            stack.push([currLeftNode, currRightNode]);
            currLeftNode = currLeftNode.left;
            currRightNode = currRightNode.right;
        } else {
            return false;
        }
    }
};