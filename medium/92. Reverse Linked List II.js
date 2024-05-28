// https://leetcode.com/problems/reverse-linked-list-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === right)
        return head;
    const dummyNode = new ListNode(undefined, head);
    let prevNode = dummyNode;
    let currNode = prevNode.next;
    let currNodeIdx = 1;
    let tailOfPart1;
    let tailOfPart2;
    let headOfPart2;


    while (currNode) {
        if (currNodeIdx < left) {
            prevNode = currNode;
            currNode = currNode.next;
            currNodeIdx++;
        } else if (currNodeIdx === left) {
            tailOfPart1 = prevNode;
            tailOfPart2 = currNode;
            prevNode = currNode;
            currNode = currNode.next;
            currNodeIdx++
        } else if (currNodeIdx <= right) {
            const newCurrNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = newCurrNode;
            currNodeIdx++;
            if (currNodeIdx - 1 === right) {
                headOfPart2 = prevNode;
                tailOfPart1.next = headOfPart2;
                tailOfPart2.next = currNode;
                break;
            }
        }
    }
    return dummyNode.next;
};