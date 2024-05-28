// https://leetcode.com/problems/subtree-of-another-tree/description/
// best answer but this program don't implemented: Merkle hashing
// https://leetcode.com/problems/subtree-of-another-tree/solutions/102741/python-straightforward-with-explanation-o-st-and-o-s-t-approaches

/**
 * @typedef {?object} TreeNode
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    return isSame(root, subRoot) || (root !== null && (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)));
};

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSame(s, t) {
    let ret;
    if (s === null && t === null) {
        ret = true;
    } else if (s === null || t === null) {
        ret = false;
    } else {
        ret = s.val === t.val && isSame(s.left, t.left) && isSame(s.right, t.right);
    }
    console.log(s?.val, t?.val, ret);
    return ret;
}