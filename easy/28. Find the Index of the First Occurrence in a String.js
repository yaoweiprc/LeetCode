// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const FINAL_STATE = needle.length;
    const letterInNeedleSet = new Set(needle.split(''));
    const dfa = {};
    for (let letter of letterInNeedleSet) {
        dfa[letter] = (new Array(needle.length)).fill(0);
    }
    dfa[needle[0]][0] = 1;
    let currState = 1;
    let tmpState = 0;
    while (currState < needle.length) {
        const expLetter = needle[currState];
        for (let letter of letterInNeedleSet) {
            if (letter === expLetter) {
                dfa[letter][currState] = currState + 1;
            } else {
                dfa[letter][currState] = dfa[letter][tmpState];
            }
        }
        currState++;
        tmpState = dfa[expLetter][tmpState];
    }
    currState = 0;
    let currIdx = 0;
    while (currIdx < haystack.length && currState !== FINAL_STATE) {
        const letter = haystack[currIdx];
        if (letterInNeedleSet.has(letter)) {
            currState = dfa[letter][currState];
        } else {
            currState = 0;
        }
        currIdx++;
    }
    if (currState === FINAL_STATE) {
        return currIdx - needle.length;
    } else {
        return -1;
    }
};