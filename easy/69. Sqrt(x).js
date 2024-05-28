// https://leetcode.com/problems/sqrtx/description/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let lo = 0;
    let hi = x;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        const midSquared = mid * mid;
        if (midSquared === x)
            return mid;
        const midPlusOneSquared = (mid + 1) * (mid + 1);
        if (midSquared < x && midPlusOneSquared > x)
            return mid;
        if (midSquared > x) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
};