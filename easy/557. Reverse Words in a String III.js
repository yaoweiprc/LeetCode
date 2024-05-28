// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split('');
    let i = 0;
    let j = 0;
    let k = 0;
    let tmp;
    while (k <= arr.length) {
        if (arr[k] === ' ' || arr[k] === undefined) {
            j = k - 1;
            while (i < j) {
                tmp = arr[j];
                arr[j--] = arr[i];
                arr[i++] = tmp;
            }
            i = k + 1;
        }
        k++;
    }
    return arr.join('');
};