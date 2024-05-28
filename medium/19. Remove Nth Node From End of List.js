// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummyNode = new ListNode(0, head);
    let fast = dummyNode;
    let slow = dummyNode;
    let distance = 0;
    while (fast.next) {
        fast = fast.next;
        distance++;
        if (distance > n) {
            slow = slow.next;
            distance--;
        }
    }
    slow.next = slow.next.next;
    return dummyNode.next;
};