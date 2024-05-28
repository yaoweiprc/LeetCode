// https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

class Comparable {
    compareTo(w) {}
}

class PQ {
    /**
     * @param {Function} [compareFunc] - A function that defines the sort order. The return value should be a number whose sign indicates the relative order of the two elements: negative if a is less than b, positive if a is greater than b, and zero if they are equal.
     */
    constructor(compareFunc) {
        if (typeof compareFunc === 'function') {
            this._compareFunc = compareFunc;
        }
    }
    _compareFunc;
    _pq = [];
    #n= 0;
    isEmpty() {
        return this.#n === 0;
    }
    size() {
        return this.#n;
    }
    // returns the top key on heap
    _top() {
        return this._pq[1];
    }
    // Adds a new key to this priority queue.
    insert(v) {
        this._pq[++this.#n] = v;
        this.#swim(this.#n);
    }
    // Removes and returns the top key on heap
    _delTop() {
        let top = this._pq[1];
        this.#exch(1, this.#n--);
        delete this._pq[this.#n + 1];
        this._pq.length--;
        this.#sink(1);
        return top;
    }
    #swim(k) {
        while (k > 1 && this._lowerPriority(Math.floor(k / 2), k)) {
            this.#exch(Math.floor(k / 2), k);
            k = Math.floor(k / 2);
        }
    }
    #sink(k) {
        while (2 * k <= this.#n) {
            let j = 2 * k;
            if (j < this.#n && this._lowerPriority(j, j + 1)) j++;
            if (this._lowerPriority(j, k)) break;
            this.#exch(k, j);
            k = j;
        }
    }

    // return true if ith item takes lower priority than jth item
    // must be implemented by derived classes
    _lowerPriority(i, j) {}

    #exch(i, j) {
        let tmp = this._pq[i];
        this._pq[i] = this._pq[j];
        this._pq[j] = tmp;
    }
}

class MinPQ extends PQ {
    min() {
        return this._top();
    }
    delMin() {
        return this._delTop();
    }
    // the larger one takes lower priority in MinPQ
    _lowerPriority(i, j) {
        if (typeof this._compareFunc ===  'function') {
            return this._compareFunc(this._pq[i], this._pq[j]) > 0;
        }
        if (!(this._pq[i] instanceof Comparable && this._pq[j] instanceof Comparable)) {
            throw new Error('Must use Comparable interface or compareFunc!');
        }
        return this._pq[i].compareTo(this._pq[j]) > 0;
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.pq = new MinPQ((a, b) => a - b);
    this.k = k;
    nums.forEach(val => this.add(val));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.pq.insert(val);
    if (this.pq.size() > this.k) {
        this.pq.delMin();
    }
    return this.pq.min();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */