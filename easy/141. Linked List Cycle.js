// https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const dummyNode = {next: head};
    let slow = dummyNode;
    let quick = dummyNode;
    do {
        quick = quick.next?.next;
        slow = slow.next;
    } while (quick && quick !== slow)
    return Boolean(quick && quick === slow);
};