// https://leetcode.com/problems/merge-k-sorted-lists/

class PQ {
    #treeArr = [];
    #n = 0;
    #compareFn = undefined;
    constructor(compareFn) {
        this.#compareFn = compareFn;
    }
    add(item) {
        this.#n++;
        this.#treeArr[this.#n] = item;
        this.#swim(this.#n);
    }
    delTop() {
        const topItem = this.#treeArr[1];
        this.#treeArr[1] = this.#treeArr[this.#n];
        delete this.#treeArr[this.#n];
        this.#n--;
        this.#sink(1);
        return topItem;
    }
    size() {
        return this.#n;
    }
    #sink(idx) {
        if (2 * idx <= this.#n) {
            let idxOfLargerChild = 2 * idx;
            if (idxOfLargerChild + 1 <= this.#n && this.#compareFn(this.#treeArr[idxOfLargerChild + 1], this.#treeArr[idxOfLargerChild]) > 0) {
                idxOfLargerChild = idxOfLargerChild + 1;
            }
            if (this.#compareFn(this.#treeArr[idxOfLargerChild], this.#treeArr[idx]) > 0) {
                this.#exch(idx, idxOfLargerChild);
                this.#sink(idxOfLargerChild);
            }
        }
    }
    #swim(idx) {
        if (idx > 1) {
            const parentIdx = Math.floor(idx / 2);
            if (this.#compareFn(this.#treeArr[idx], this.#treeArr[parentIdx]) > 0) {
                this.#exch(idx, parentIdx);
                this.#swim(parentIdx);
            }
        }
    }
    #exch(idx1, idx2) {
        let tmp = this.#treeArr[idx1];
        this.#treeArr[idx1] = this.#treeArr[idx2];
        this.#treeArr[idx2] = tmp;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const dummyHead = new ListNode(undefined, null);
    let currTail = dummyHead;
    const pq = new PQ(({val: val1}, {val: val2}) => {
        return val2 - val1;
    });
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            pq.add(lists[i]);
        }
    }
    while (pq.size() > 0) {
        const minNode = pq.delTop();
        currTail.next = minNode;
        currTail = minNode;
        if (minNode.next) {
            pq.add(minNode.next);
        }
    }
    return dummyHead.next;
};