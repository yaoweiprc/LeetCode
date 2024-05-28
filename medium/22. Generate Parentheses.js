// https://leetcode.com/problems/generate-parentheses/description/
// https://leetcode.com/problems/generate-parentheses/solutions/2542620/python-java-w-explanation-faster-than-96-w-proof-easy-to-understand

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let queue = [{
        left: 0,
        right: 0,
        str: '',
    }];
    while (queue[0].left < n || queue[0].right < n) {
        const {left, right, str} = queue.shift();
        if (left < n) {
            queue.push({
                left: left + 1,
                right: right,
                str: str + '(',
            });
        }
        if (right < left) {
            queue.push({
                left: left,
                right: right + 1,
                str: str + ')',
            });
        }
    }
    return queue.map(({str}) => str);
}