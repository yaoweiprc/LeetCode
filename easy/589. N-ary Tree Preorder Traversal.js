// https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const arr = [];
    if (root) recurse(root, arr);
    return arr;
};

function recurse(root, arr) {
    arr.push(root.val);
    if (Array.isArray(root.children)) {
        root.children.forEach(node => {
            recurse(node, arr);
        });
    }
}