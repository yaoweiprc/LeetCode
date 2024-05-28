// https://leetcode.com/problems/lru-cache/description/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.nodeNum = 0;
    this.dummyHead = {
        prev: null,
        next: null,
        key: undefined,
        val: undefined,
    };
    this.tail = this.dummyHead;
    this.keyNodeMap = new Map();

};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.keyNodeMap.has(key))
        return -1;
    else {
        const node = this.keyNodeMap.get(key);
        this.moveNodeToTail(node);
        return node.val;
    }
};

LRUCache.prototype.moveNodeToTail = function (node) {
    if (this.tail !== node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
    }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const isExist = this.keyNodeMap.has(key);
    if (isExist) {
        const node = this.keyNodeMap.get(key);
        node.val = value;
        this.moveNodeToTail(node);
    } else {
        const node = {
            prev: this.tail,
            next: null,
            key: key,
            val: value,
        };
        this.tail.next = node;
        this.tail = node;
        this.keyNodeMap.set(key, node);
        this.nodeNum++;
        if (this.nodeNum > this.capacity) {
            const firstNode = this.dummyHead.next;
            const secondNode = firstNode.next;
            this.keyNodeMap.delete(firstNode.key);
            this.dummyHead.next = secondNode;
            secondNode.prev = this.dummyHead;
            this.nodeNum--;
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */