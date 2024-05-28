// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

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
    let nextLevelHead = root;
    while (nextLevelHead) {
        const nextLevelDummyHead = new Node();
        let lastNode = nextLevelDummyHead;
        let currNode = nextLevelHead;
        while (currNode) {
            if (currNode.left) {
                lastNode.next = currNode.left;
                currNode.left.next = currNode.right;
                lastNode = currNode.right;
            }
            currNode = currNode.next;
        }
        nextLevelHead = nextLevelDummyHead.next;
    }
    return root;
};