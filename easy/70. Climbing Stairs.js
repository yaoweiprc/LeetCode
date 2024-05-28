// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const arr = new Array(n + 1).fill(0);
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;
    function recurse(x) {
        if (arr[x]) {
            return arr[x];
        }
        arr[x] = recurse(x - 1) + recurse(x - 2);
        return arr[x];
    }
    return recurse(n);
};