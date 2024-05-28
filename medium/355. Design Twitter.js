// https://leetcode.com/problems/design-twitter/description/

class Comparable {
    compareTo(w) {}
}

class StrComparable extends Comparable {
    constructor(str) {
        super();
        this.val = str;
    }

    /**
     * @param {StrComparable} w
     * @return {number}
     */
    compareTo(w) {
        return this.val.localeCompare(w.val);
    }
    toString() {
        return this.val;
    }
}

// base class for priority queue
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

class MaxPQ extends PQ {
    max() {
        return this._top();
    }
    delMax() {
        return this._delTop();
    }
    // the smaller one takes lower priority in MaxPQ
    _lowerPriority(i, j) {
        if (typeof this._compareFunc ===  'function') {
            return this._compareFunc(this._pq[i], this._pq[j]) < 0;
        }
        if (!(this._pq[i] instanceof Comparable && this._pq[j] instanceof Comparable)) {
            throw new Error('Must use Comparable interface or compareFunc!');
        }
        return this._pq[i].compareTo(this._pq[j]) < 0;
    }
}

class Twitter {
    userTweetListMap = new Map();
    userFollowMap = new Map();
    nextTweetIdx = 0;

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let arr;
        if (this.userTweetListMap.has(userId)) {
            arr = this.userTweetListMap.get(userId);
        } else {
            arr = [];
            this.userTweetListMap.set(userId, arr);
        }
        arr.push({tweetId, idx: this.nextTweetIdx++, userId});
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        let set;
        if (this.userFollowMap.has(followerId)) {
            set = this.userFollowMap.get(followerId);
        } else {
            set = new Set();
            this.userFollowMap.set(followerId, set);
        }
        set.add(followeeId);
    };

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.userFollowMap.has(followerId)) {
            this.userFollowMap.get(followerId).delete(followeeId);
        }
    };

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const that = this;
        const map = new Map();
        const followedUsersSet = this.userFollowMap.get(userId);
        let followedUserArr = [userId];
        if (followedUsersSet) {
            const newSet = new Set(followedUsersSet);
            newSet.add(userId);
            followedUserArr = Array.from(newSet);
        }
        followedUserArr.forEach(userId => {
            if (that.userTweetListMap.has(userId)) {
                map.set(userId, that.userTweetListMap.get(userId).length - 1);
            }
        });
        const pq = new MaxPQ(({idx: idxA}, {idx: idxB}) => idxA - idxB);
        for (let userId of map.keys()) {
            const idx = map.get(userId);
            if (idx >= 0) {
                pq.insert(that.userTweetListMap.get(userId)[idx]);
                map.set(userId, idx - 1);
            }
        }
        const res = [];
        while (res.length < 10) {
            if (pq.isEmpty())
                break;
            const {userId, tweetId}  = pq.delMax();
            res.push(tweetId);
            const idx = map.get(userId);
            if (idx >= 0) {
                pq.insert(that.userTweetListMap.get(userId)[idx]);
                map.set(userId, idx - 1);
            }
        }
        return res;
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */