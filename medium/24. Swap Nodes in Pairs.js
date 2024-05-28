// https://leetcode.com/problems/swap-nodes-in-pairs/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let newHead = head;
    if (head && head.next) {
        newHead = head.next;
        head.next = swapPairs(head.next.next);
        newHead.next = head;
    }
    return newHead;
};