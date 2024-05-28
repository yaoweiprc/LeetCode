// https://leetcode.com/problems/word-break-ii/description/

class Node {
    word = '';
    nextLetterMap = {};
}

function buildTrie(wordDict) {
    const root = new Node();
    for (let word of wordDict) {
        let currNode = root;
        let nextLetterPos = 0;
        while (nextLetterPos < word.length) {
            const nextLetter = word.charAt(nextLetterPos);
            if (!currNode.nextLetterMap[nextLetter]) {
                currNode.nextLetterMap[nextLetter] = new Node();
            }
            currNode = currNode.nextLetterMap[nextLetter];
            nextLetterPos++;
        }
        currNode.word = word;
    }
    return root;
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const root = buildTrie(wordDict);
    const resArr = [];
    const currPathWordArr = [];

    // TODO: memoize
    function findAllWordsCanMatch(startIdx) {
        let currNode = root;
        let nextCharIdx = startIdx;
        const wordArr = [];
        while (nextCharIdx < s.length && currNode.nextLetterMap[s.charAt(nextCharIdx)]) {
            currNode = currNode.nextLetterMap[s.charAt(nextCharIdx)];
            nextCharIdx++;
            if (currNode.word)
                wordArr.push(currNode.word);
        }
        return wordArr;
    }

    function recurse(currIdx) {
        if (currIdx === s.length) {
            resArr.push(currPathWordArr.join(' '));
            return;
        }
        const wordList = findAllWordsCanMatch(currIdx);
        for (let nextWord of wordList) {
            currPathWordArr.push(nextWord);
            recurse(currIdx + nextWord.length);
            currPathWordArr.pop();
        }
    }
    recurse(0);
    return resArr;
};

















