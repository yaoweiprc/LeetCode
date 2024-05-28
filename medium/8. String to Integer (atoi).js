// https://leetcode.com/problems/string-to-integer-atoi/description/

const MIN_DIGIT_CHAR_CODE = '0'.charCodeAt(0);
const MAX_DIGIT_CHAR_CODE = '9'.charCodeAt(0);

const MAX_POSITIVE_INT = 2 ** 31 - 1;
const MAX_NEGATIVE_INT = 2 ** 31;

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
    let i = 0;
    function getChar() {
        return str.charAt(i);
    }
    let isPositive = true;
    let num = 0;
    while (getChar() === ' ') {
        i++;
    }
    if (getChar() === '+') {
        i++;
    } else if (getChar() === '-') {
        isPositive = false;
        i++;
    } else if (i === str.length) {
        return 0;
    }
    while (i < str.length) {
        const currChar = getChar();
        const currCharCode = currChar.charCodeAt(0);
        if (currCharCode >= MIN_DIGIT_CHAR_CODE && currCharCode <= MAX_DIGIT_CHAR_CODE) {
            const digit = currCharCode - MIN_DIGIT_CHAR_CODE;
            num = num * 10 + digit;
            if (isPositive && num >= MAX_POSITIVE_INT) {
                return MAX_POSITIVE_INT;
            } else if (!isPositive && num >= MAX_NEGATIVE_INT) {
                return -(MAX_NEGATIVE_INT);
            }
            i++;
        } else {
            break;
        }
    }
    if (isPositive) {
        return num;
    } else {
        return -(num);
    }
}

console.log(myAtoi('     f;ajefpoiw'));
console.log(myAtoi('+a;slfj'));
console.log(myAtoi('-wef;ll'));
console.log(myAtoi('   +123ladgjil'));
console.log(myAtoi('   + '));
console.log(myAtoi('-12'));
console.log(myAtoi('6546'));
console.log(myAtoi('65488888888888888888888888888886'));
console.log(myAtoi('-65488888888888888888888888888886'));