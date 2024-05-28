// https://leetcode.com/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let next = slow.next;
    slow.next = null;
    let current = slow;
    while (next) {
        const tmp = next.next;
        next.next = current;
        current = next;
        next = tmp;
    }
    const tail = current;
    let left = head;
    let right = tail;
    while (right) {
        if (left.val !== right.val) {
            return false;
        } else {
            left = left.next;
            right = right.next;
        }
    }
    return true;
};