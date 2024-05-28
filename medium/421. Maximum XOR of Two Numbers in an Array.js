// https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
// https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1723252/a-deatiled-explanation-that-ever-exists-with-notes-you-can-download
// 这种方法时间复杂度是O(n)，但是leetcode说超时

var findMaximumXOR = function(nums) {
    const root = [null, null];
    // build trie
    for (let num of nums) {
        let currNode = root;
        for (let i = 30; i >= 0; i--) {
            const mask = (1 << i);
            const currBit = (num & mask) > 0 ? 1 : 0;
            if (currNode[currBit] === null) {
                currNode[currBit] = [null, null];
            }
            currNode = currNode[currBit];
        }
    }
    let maxXOR = 0;
    for (let num of nums) {
        let currNode = root;
        let xor = 0;
        for (let i = 30; i >= 0; i--) {
            const mask = (1 << i);
            const bit = (num & mask) > 0 ? 1 : 0;
            const oppositeBit = 1 - bit;
            if (currNode[oppositeBit] !== null) {
                currNode = currNode[oppositeBit];
                xor = xor | mask;
            } else {
                currNode = currNode[bit];
            }
        }
        maxXOR = Math.max(maxXOR, xor);
    }
    return maxXOR;
}


// 另一种巧妙的方法，一般人想不出来
// https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/91049/java-o-n-solution-using-bit-manipulation-and-hashmap/comments/95535

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var findMaximumXOR = function(nums) {
    let mask = 0;
    let max = 0;
    for (let i = 31; i >= 0; i--) {
        mask = mask | (1 << i);
        const leftPartSet = new Set();
        for (let num of nums) {
            leftPartSet.add(num & mask);
        }
        const maxTry = max | (1 << i);
        for (let leftPart of leftPartSet) {
            const otherLeftPart = maxTry ^ leftPart;
            if (leftPartSet.has(otherLeftPart)) {
                max = maxTry;
                break;
            }
        }
    }
    return max;
};
*/
