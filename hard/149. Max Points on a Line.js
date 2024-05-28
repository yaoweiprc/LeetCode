// https://leetcode.com/problems/max-points-on-a-line/description/
// https://youtu.be/Bb9lOXUOnFw?si=3KpYyCfJrNetI6pA

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let res = 1;
    for (let i = 0; i < points.length; i++) {
        const slopeCountMap = new Map();
        const point1 = points[i];
        for (let j = i + 1; j < points.length; j++) {
            const point2 = points[j];
            let slope;
            if (point1[0] === point2[0]) {
                slope = Number.POSITIVE_INFINITY;
            } else {
                slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);
            }
            if (slopeCountMap.has(slope)) {
                slopeCountMap.set(slope, slopeCountMap.get(slope) + 1);
            } else {
                slopeCountMap.set(slope, 1);
            }
            res = Math.max(res, slopeCountMap.get(slope) + 1);
        }
    }
    return res;
};