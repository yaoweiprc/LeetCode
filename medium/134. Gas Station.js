// https://leetcode.com/problems/gas-station/description/
// https://leetcode.com/problems/gas-station/solutions/1706142/java-c-python-an-explanation-that-ever-exists-till-now

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalBalance = 0;
    let currBalance = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        totalBalance = totalBalance + gas[i] - cost[i];
        currBalance = currBalance + gas[i] - cost[i];
        if (currBalance < 0) {
            currBalance = 0;
            start = i + 1;
        }
    }
    if (totalBalance < 0) {
        return -1;
    }
    return start;
};