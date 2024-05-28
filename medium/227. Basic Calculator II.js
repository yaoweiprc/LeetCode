// https://leetcode.com/problems/basic-calculator-ii/description/

/**
 * @param {string} str
 * @return {number}
 */
var calculate = function(str) {
    const zeroCharCode = '0'.charCodeAt(0);
    const stack = [];
    let sign = '+';
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];
        if (isDigit(currChar)) {
            num = num * 10 + currChar.charCodeAt(0) - zeroCharCode;
        }
        if (i === str.length - 1 || isSign(currChar)) {
            if (sign === '+')
                stack.push(num);
            else if (sign === '-')
                stack.push(-num);
            else if (sign === '*')
                stack.push(stack.pop() * num);
            else if (sign === '/')
                stack.push(Math.trunc(stack.pop() / num));
            sign = currChar;
            num = 0;
        }
    }
    return stack.reduce((accu, num) => accu + num, 0);

    function isDigit(char) {
        const charCode = char.charCodeAt(0);
        return charCode >= zeroCharCode && charCode - zeroCharCode < 10;
    }
    function isSign(char) {
        return char === '+'
            || char === '-'
            || char === '*'
            || char === '/';
    }
};