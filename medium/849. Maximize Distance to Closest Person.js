// https://leetcode.com/problems/maximize-distance-to-closest-person/

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let maxDis = 0;
    let lastSeatedIdx = -1;
    let i = 0;
    while (i < seats.length) {
        if (seats[i]) {
            if (lastSeatedIdx < 0) {
                maxDis = i;
            } else {
                maxDis = Math.max(maxDis, Math.floor((i - lastSeatedIdx) / 2));
            }
            lastSeatedIdx = i;
        }
        i++;
    }
    maxDis = Math.max(maxDis, seats.length - lastSeatedIdx - 1);
    return maxDis;
};