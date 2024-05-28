// https://leetcode.com/problems/intersection-of-two-linked-lists/description
// https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49785/java-solution-without-knowing-the-difference-in-len/comments/165648

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = (a === null) ? headB : a.next;
        b = (b === null) ? headA : b.next;
    }
    return a;
};