// https://leetcode.com/problems/odd-even-linked-list/description/

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
var oddEvenList = function(head) {
    const oddDummyHead = new ListNode();
    const evenDummyHead = new ListNode();
    let oddTail = oddDummyHead;
    let evenTail = evenDummyHead;
    let isNextOdd = true;
    while (head !== null) {
        const curr = head;
        head = head.next;
        curr.next = null;
        if (isNextOdd) {
            oddTail.next = curr;
            oddTail = curr;
        } else {
            evenTail.next = curr;
            evenTail = curr;
        }
        isNextOdd = !isNextOdd;
    }
    if (evenDummyHead.next) {
        oddTail.next = evenDummyHead.next;
    }
    return oddDummyHead.next;
};