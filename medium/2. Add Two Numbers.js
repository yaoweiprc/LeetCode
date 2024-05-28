// https://leetcode.com/problems/add-two-numbers/description/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const resultHead = {next: null};
    let resultTail = resultHead;
    let numToAddToNextDigit = 0;
    while (l1 || l2) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + numToAddToNextDigit;
        const digit = sum % 10;
        numToAddToNextDigit = Math.floor(sum / 10);
        resultTail.next = new ListNode(digit, null);
        resultTail = resultTail.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (numToAddToNextDigit > 0) {
        resultTail.next = new ListNode(numToAddToNextDigit, null);
    }
    return resultHead.next;
}

function arrToListNode(arr) {
    const head = {next: null};
    let tail = head;
    for (let digit of arr) {
        tail.next = new ListNode(digit, null);
        tail = tail.next;
    }
    return head.next;
}

function nodeToArr(node) {
    const resultArr = [];
    while (node) {
        resultArr.push(node.val);
        node = node.next;
    }
    return resultArr;
}

console.log(nodeToArr(addTwoNumbers(arrToListNode([2,4,3]), arrToListNode([5,6,4]))));
console.log(nodeToArr(addTwoNumbers(arrToListNode([0]), arrToListNode([0]))));
console.log(nodeToArr(addTwoNumbers(arrToListNode([9,9,9,9,9,9,9]), arrToListNode([9,9,9,9]))));
console.log(nodeToArr(addTwoNumbers(arrToListNode([0, 1]), arrToListNode([0, 1, 2]))));
console.log(nodeToArr(addTwoNumbers(arrToListNode([]), arrToListNode([0, 1]))));
console.log(nodeToArr(addTwoNumbers(arrToListNode([9, 9]), arrToListNode([1]))));