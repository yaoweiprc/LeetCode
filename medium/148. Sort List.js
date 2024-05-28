// https://leetcode.com/problems/sort-list/description/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
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
var sortList = function(head) {
    if (!head)
        return null;
    if (!head.next)
        return head;
    let slow = head;
    let fast = head;
    while (fast.next?.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let leftHead = head;
    let rightHead = slow.next;
    slow.next = null;
    leftHead = sortList(leftHead);
    rightHead = sortList(rightHead);

    const dummyHead = new ListNode();
    let tail = dummyHead;
    let currNodeInLeftList = leftHead;
    let currNodeInRightList = rightHead;
    while (true) {
        if (currNodeInLeftList === null) {
            tail.next = currNodeInRightList;
            break;
        }
        if (currNodeInRightList === null) {
            tail.next = currNodeInLeftList;
            break;
        }
        if (currNodeInLeftList.val <= currNodeInRightList.val) {
            tail.next = currNodeInLeftList;
            tail = currNodeInLeftList;
            currNodeInLeftList = currNodeInLeftList.next;
        } else if (currNodeInRightList.val < currNodeInLeftList.val) {
            tail.next = currNodeInRightList;
            tail = currNodeInRightList;
            currNodeInRightList = currNodeInRightList.next;
        }
    }
    return dummyHead.next;
};