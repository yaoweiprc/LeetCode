// https://leetcode.com/problems/merge-intervals/description/
// better answer: https://leetcode.com/problems/merge-intervals/solutions/21242/c-10-line-solution-easing-understanding

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const nodes = [];
    intervals.forEach(([start, end], intervalIdx) => {
        nodes.push({
            intervalIdx,
            isStart: true,
            pos: start
        });
        nodes.push({
            intervalIdx,
            isStart: false,
            pos: end,
        });
    });
    nodes.sort((a, b) => {
        if (a.pos !== b.pos) {
            return a.pos - b.pos;
        }
        if (a.isStart !== b.isStart) {
            if (a.isStart) return -1;
            return 1;
        }
        return 0;
    });
    const resIntervals = [];
    const currSet = new Set();
    let currStartPos;
    nodes.forEach(({
        intervalIdx,
        isStart,
        pos,
    }) => {
        if (isStart) {
            if (currSet.size === 0) {
                currStartPos = pos;
            }
            currSet.add(intervalIdx);
        } else {
            currSet.delete(intervalIdx);
            if (currSet.size === 0) {
                resIntervals.push([currStartPos, pos]);
            }
        }
    });
    return resIntervals;
};