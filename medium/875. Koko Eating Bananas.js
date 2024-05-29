// https://leetcode.com/problems/koko-eating-bananas/description/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let max = 0;
    for (let num of piles) {
        max = Math.max(num, max);
    }
    let low = 1;
    let high = max;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        let hourCount = 0;
        let i = 0;
        while (hourCount <= h && i < piles.length) {
            hourCount += Math.ceil(piles[i] / mid);
            i++;
        }
        if (hourCount > h) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return high;
};