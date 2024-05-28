// https://leetcode.com/problems/fraction-to-recurring-decimal/description/
// https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/51106/my-clean-java-solution
// 用 4/333 作为输入理解代码比较好

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    const resArr = [];
    // 分子是0
    if (numerator === 0)
        return '0';
    // 商的符号
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0))
        resArr.push('-');
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    resArr.push(...((Math.floor(numerator / denominator)).toString().split('')));
    numerator = numerator % denominator;
    // 被整除
    if (numerator === 0)
        return resArr.join('');

    // 没被整除，有小数部分
    resArr.push('.');
    const map = new Map();
    map.set(numerator, resArr.length);
    // numerator为0的时候商除尽了不是循环小数
    while (numerator !== 0) {
        numerator *= 10;
        resArr.push((Math.floor(numerator / denominator)).toString());
        numerator = numerator % denominator;
        if (map.has(numerator)) {
            resArr.splice(map.get(numerator), 0, '(');
            resArr.push(')');
            break;
        } else {
            map.set(numerator, resArr.length);
        }
    }
    return resArr.join('');
};