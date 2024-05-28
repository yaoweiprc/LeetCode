class PQ {
    #treeArr = [];
    #n = 0;
    #compareFn = undefined;
    // compareFn receives two parameters item1, item2,
    // return value > 0 if item1 has a higher priority than item2
    // return value === 0 if item1 has a priority equal to item2
    // return value < 0 if item2 has a higher priority than item1
    constructor(compareFn) {
        this.#compareFn = compareFn;
    }
    add(item) {
        this.#n++;
        this.#treeArr[this.#n] = item;
        this.#swim(this.#n);
    }
    delTop() {
        if (this.isEmpty())
            return ;
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
    isEmpty() {
        return this.#n === 0;
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