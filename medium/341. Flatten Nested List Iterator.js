// https://leetcode.com/problems/flatten-nested-list-iterator/description/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = [{
        arr: nestedList,
        idx: 0,
    }];
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    let nextInt = undefined;
    while (nextInt === undefined && this.stack.length > 0) {
        const lastItemOnStack = this.stack[this.stack.length - 1];
        const {arr, idx} = lastItemOnStack;
        if (idx > arr.length - 1) {
            this.stack.pop();
        } else {
            if (!arr[idx].isInteger()) {
                this.stack.push({
                    arr: arr[idx].getList(),
                    idx: 0,
                });
                lastItemOnStack.idx++;
            } else {
                nextInt = arr[idx].getInteger();
            }
        }
    }
    return nextInt !== undefined;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    if (this.hasNext()) {
        const lastItemOnStack = this.stack[this.stack.length - 1];
        const {arr, idx} = lastItemOnStack;
        let retInt = arr[idx].getInteger();
        lastItemOnStack.idx++;
        return retInt;
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */