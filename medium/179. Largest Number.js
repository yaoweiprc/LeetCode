// https://leetcode.com/problems/largest-number/description/
// https://leetcode.com/problems/largest-number/solutions/53158/my-java-solution-to-share

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const strNums = nums.map(num => num.toString());
    strNums.sort((a, b) => {
        const ab = parseInt(a + b);
        const ba = parseInt(b + a);
        return ba - ab;
    });
    if (strNums[0] === '0')
        return '0';
    return strNums.join('');
};