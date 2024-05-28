// https://leetcode.com/problems/reverse-words-in-a-string/description/
// 这个题没啥技巧，主要考察对边界情况的周密分析，很难一次写出没有bug的代码

/**
 * @param {string} str
 * @return {string}
 */
var reverseWords = function(str) {
    const length = str.length;
    const arr = str.split('');
    reverse(arr, 0, length - 1);
    let i = 0, j = 0;
    // console.log(arr.join(''));
    // 反转每个单词
    while (i < length) {
        while (arr[i] === ' ') i++;
        if (i === length) break;
        // 此时i在word开头
        j = i;
        while (arr[j] !== ' ' && j < length) j++;
        // 此时j在word结尾+1
        reverse(arr, i, j - 1);
        i = j;
    }
    // console.log(arr.join(''));
    // 去掉空格
    i = 0;
    j = 0;
    while (true) {
        while (arr[j] === ' ' && j < length) j++;
        if (j === length) break;
        while (arr[j] !== ' ' && j < length) arr[i++] = arr[j++];
        if (j === length) break;
        arr[i++] = ' ';
    }
    if (arr[length - 1] === ' ') i--;
    // console.log(arr.slice(0, i).join(''));
    return arr.slice(0, i).join('');
};

function reverse(arr, start, end) {
    while (start < end) {
        let tmp = arr[end];
        arr[end] = arr[start];
        arr[start] = tmp;
        start++;
        end--;
    }
}

// reverseWords("  hello world  ");