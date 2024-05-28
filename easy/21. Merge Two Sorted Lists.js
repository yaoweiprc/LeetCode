// https://leetcode.com/problems/merge-two-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummyNode = {next: null};
    let lastNode = dummyNode;
    while (list1 || list2) {
        if (!list2) {
            lastNode.next = list1;
            break;
        } else if (!list1) {
            lastNode.next = list2;
            break;
        } else if (list1.val < list2.val) {
            lastNode.next = list1;
            lastNode = lastNode.next;
            list1 = list1.next;
        } else {
            lastNode.next = list2;
            lastNode = lastNode.next;
            list2 = list2.next;
        }
    }
    return dummyNode.next;
};