// https://leetcode.com/problems/fizz-buzz/description/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const res = [];
    for (let i = 1; i < n + 1; i++) {
        const divisibleBy3 = i % 3 === 0;
        const divisibleBy5 = i % 5 === 0;
        if (divisibleBy3 && divisibleBy5) {
            res.push('FizzBuzz');
        } else if (divisibleBy3) {
            res.push('Fizz');
        } else if (divisibleBy5) {
            res.push('Buzz');
        } else {
            res.push(i.toString());
        }
    }
    return res;
};