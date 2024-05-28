// https://leetcode.com/problems/reverse-linked-list/description/

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
var reverseList = function(head) {
    if (head === null)
        return null;
    let newHead = null;
    function recurse(head) {
        if (head.next) {
            recurse(head.next).next = head;
        } else {
            newHead = head;
        }
        head.next = null;
        return head;
    }
    recurse(head);
    return newHead;
}


/*
var reverseList = function(head) {
    let headOfReversedLinkedList = null;
    while (head) {
        const newHead = head.next;
        head.next = headOfReversedLinkedList;
        headOfReversedLinkedList = head;
        head = newHead;
    }
    return headOfReversedLinkedList;
};*/
