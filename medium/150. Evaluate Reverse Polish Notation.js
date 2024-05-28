// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let token of tokens) {
        switch (token) {
            case '+':
            case '-':
            case '*':
            case '/': {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                let res;
                if (token === '+') {
                    res = operand1 + operand2;
                } else if (token === '-') {
                    res = operand1 - operand2;
                } else if (token === '*') {
                    res = operand1 * operand2;
                } else if (token === '/') {
                    res = Math.trunc(operand1 / operand2);
                }
                stack.push(res);
                break;
            }
            default: {
                stack.push(parseInt(token));
            }
        }
    }
    if (stack.length !== 1) {
        throw new Error(stack.length.toString());
    }
    return stack.pop();
};