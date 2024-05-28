// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/8064/my-java-solution-with-fifo-queue

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    const queue = [''];
    while (queue[0].length < digits.length) {
        const prefix = queue.shift();
        for (let char of map[digits[prefix.length]]) {
            queue.push(prefix + char);
        }
    }
    return queue;
};

// my old answer:
/**
 * @param {string} digits
 * @return {string[]}
 */
/*
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    const resArr = [];
    function recursion (prefix, restDigits) {
        if (restDigits.length === 0) {
            resArr.push(prefix);
        } else {
            for (let char of map[restDigits[0]]) {
                recursion(prefix + char, restDigits.substring(1));
            }
        }
    }
    recursion('', digits);
    return resArr;
};*/
