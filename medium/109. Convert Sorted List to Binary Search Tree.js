// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null)
        return null;
    if (head.next === null) {
        return new TreeNode(head.val);
    }
    const dummyNode = new ListNode();
    dummyNode.next = head;
    let slow = dummyNode;
    let fast = dummyNode;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const medianNode = slow.next;
    slow.next = null;
    return new TreeNode(medianNode.val, sortedListToBST(head), sortedListToBST(medianNode.next));
};