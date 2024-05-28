// https://leetcode.com/problems/min-stack/description/
// https://www.geeksforgeeks.org/tracking-current-maximum-element-in-a-stack/

var MinStack = function() {
    this.currMin = Number.MAX_SAFE_INTEGER;
    this.head = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let valToStore;
    if (val < this.currMin) {
        if (this.currMin === Number.MAX_SAFE_INTEGER) {
            valToStore = val;
        } else {
            valToStore = 2 * val - this.currMin;
        }
        this.currMin = val;
    } else {
        valToStore = val;
    }
    const node = {val: valToStore, next: this.head};
    this.head = node;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.head.val < this.currMin) {
        this.currMin = 2 * this.currMin - this.head.val;
    }
    this.head = this.head.next;
    if (this.head === null) {
        this.currMin = Number.MAX_SAFE_INTEGER;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return Math.max(this.head.val, this.currMin);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.currMin;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */