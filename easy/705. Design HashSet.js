// https://leetcode.com/problems/design-hashset/description/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = null;
    }
    val;
    next;
}

class MyHashSet {
    constructor() {
        this._arr = new Array(997);
        for (let i = 0; i < this._arr.length; i++) {
            this._arr[i] = new Node('H');
        }
    }
    _arr;
    _hash(key) {
        return key % 997;
    }
    add(key) {
        if (!this.contains(key)) {
            let node = this._arr[this._hash(key)];
            while (node.next) {
                node = node.next
            }
            node.next = new Node(key);
        }
    }
    remove(key) {
        if (this.contains(key)) {
            let node = this._arr[this._hash(key)];
            while (node.next) {
                if (node.next.val === key) {
                    node.next = node.next.next;
                    return;
                }
                node = node.next;
            }
        }
    }
    contains(key) {
        let node = this._arr[this._hash(key)];
        while (node) {
            if (node.val === key) {
                return true;
            }
            node = node.next;
        }
        return false;
    }
}