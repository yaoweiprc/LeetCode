// https://leetcode.com/problems/copy-list-with-random-pointer/description/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null)
        return head;
    let currNode = head;
    while (currNode) {
        const copyOfCurrNode = Object.assign({}, currNode);
        currNode.next = copyOfCurrNode;
        currNode = copyOfCurrNode.next;
    }
    currNode = head.next;
    while (currNode) {
        if (currNode.random) {
            currNode.random = currNode.random.next;
        }
        if (currNode.next) {
            currNode = currNode.next.next;
        } else {
            currNode = null;
        }
    }
    const headOfCopiedLinkedList = head.next;
    let currNodeInOriLinkedList = head;
    let currNodeInCopiedLinkedList = head.next;
    while (currNodeInCopiedLinkedList) {
        currNodeInOriLinkedList.next = currNodeInCopiedLinkedList.next;
        currNodeInOriLinkedList = currNodeInOriLinkedList.next;
        currNodeInCopiedLinkedList.next = currNodeInOriLinkedList ? currNodeInOriLinkedList.next : null;
        currNodeInCopiedLinkedList = currNodeInCopiedLinkedList.next;
    }
    return headOfCopiedLinkedList;
};