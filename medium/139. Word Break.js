// https://leetcode.com/problems/word-break/description/

class Node {
    prefix = '';
    isEndOfWord = false;
    nextLetterMap = {};
    charIdxSet = new Set();
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
                currNode.nextLetterMap[nextLetter].prefix = currNode.prefix + nextLetter;
            }
            currNode = currNode.nextLetterMap[nextLetter];
            nextLetterPos++;
        }
        currNode.isEndOfWord = true;
    }
    return root;
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const root = buildTrie(wordDict);
    let ret = false;
    function recurse(currNode, nextCharIdx) {
        if (ret)
            return;
        if (!currNode)
            return;
        if (currNode.charIdxSet.has(nextCharIdx))
            return;
        else
            currNode.charIdxSet.add(nextCharIdx);
        if (nextCharIdx === s.length) {
            if (currNode.isEndOfWord) {
                ret = true;
            }
            return;
        }
        const nextChar = s[nextCharIdx];
        recurse(currNode.nextLetterMap[nextChar], nextCharIdx + 1);
        if (currNode.isEndOfWord) {
            recurse(root, nextCharIdx);
        }
    }
    recurse(root, 0);
    return ret;
};