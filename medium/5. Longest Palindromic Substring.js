// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(str) {
    let start = 0, end = 0;
    function getCurrMaxLength() {
        return end - start + 1;
    }
    for (let i = 0; i < str.length; i++) {
        const oddLength = expand(i, i, str);
        if (oddLength > getCurrMaxLength()) {
            const dist = Math.floor(oddLength / 2);
            start = i - dist;
            end = i + dist;
        }
        const evenLength = expand(i, i + 1, str);
        if (evenLength > getCurrMaxLength()) {
            const dist = Math.floor(evenLength / 2);
            start = i - dist + 1;
            end = i + dist;
        }
    }
    return str.substring(start, end + 1);
}

function expand(i, j, str) {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
        i--;
        j++;
    }
    return j - i - 1;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('racecar'));