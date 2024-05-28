// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/

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
var removeZeroSumSublists = function(head) {
    const map = new Map();
    let runningSum = 0;
    const dummyHead = new ListNode(0, head);
    let currNode = dummyHead;
    while (currNode !== null) {
        runningSum += currNode.val;
        map.set(runningSum, currNode);
        currNode = currNode.next;
    }
    currNode = dummyHead;
    runningSum = 0;
    while (currNode !== null) {
        runningSum += currNode.val;
        if (map.get(runningSum) !== currNode) {
            currNode.next = map.get(runningSum).next;
        }
        currNode = currNode.next;
    }
    return dummyHead.next;
};