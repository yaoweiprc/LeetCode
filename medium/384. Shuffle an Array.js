// https://leetcode.com/problems/shuffle-an-array/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.oriNums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.oriNums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const nums = this.oriNums.slice();
    for (let i = nums.length - 1; i > 0; i--) {
        const randomIdx = Math.floor(Math.random() * (i + 1));
        this._swap(nums, i, randomIdx);
    }
    return nums;
};

Solution.prototype._swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */