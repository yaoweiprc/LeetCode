// https://leetcode.com/problems/linked-list-cycle-ii/
// https://leetcode.com/problems/linked-list-cycle-ii/solutions/44781/concise-o-n-solution-by-using-c-with-detailed-alogrithm-description
// 看下面这个评论更好地理解答案
// https://leetcode.com/problems/linked-list-cycle-ii/solutions/44781/concise-o-n-solution-by-using-c-with-detailed-alogrithm-description/comments/219750

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    let entry = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            while (slow !== entry) {
                slow = slow.next;
                entry = entry.next;
            }
            return entry;
        }
    }
    return null;
};