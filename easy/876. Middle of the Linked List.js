// https://leetcode.com/problems/middle-of-the-linked-list/description/

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
var middleNode = function(head) {
    let fakeFirstNode = {next: head};
    let slowP = fakeFirstNode;
    let quickP = fakeFirstNode;
    while (quickP) {
        slowP = slowP.next;
        quickP = quickP.next?.next;
    }
    return slowP;
};