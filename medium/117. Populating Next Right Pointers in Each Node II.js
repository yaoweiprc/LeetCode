// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    function recursion(levelHead) {
        if (!levelHead) return;
        let currNode = levelHead;
        let nextLevelHead = null;
        let nextLevelTail = null;
        while (currNode) {
            [currNode.left, currNode.right].forEach(node => {
                if (node) {
                    if (!nextLevelHead) {
                        nextLevelHead = nextLevelTail = node;
                    } else {
                        nextLevelTail.next = node;
                        nextLevelTail = node;
                    }
                }
            });
            currNode = currNode.next;
        }
        recursion(nextLevelHead);
    }
    recursion(root);
    return root;
};