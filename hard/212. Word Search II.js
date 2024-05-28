// https://leetcode.com/problems/word-search-ii/description/
// 报超时但是程序是正确的

class TrieNode {
    children = {};
    isWord = false;
    addWord(word) {
        let currNode = this;
        for (let char of word) {
            if (!currNode.children[char]) {
                currNode.children[char] = new TrieNode();
            }
            currNode = currNode.children[char];
        }
        currNode.isWord = true;
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const root = new TrieNode();
    for (let word of words) {
        root.addWord(word);
    }

    const resSet = new Set();
    const onPathSet = new Set();

    const ROW = board.length;
    const COL = board[0].length;

    function dfs(row, col, node, wordPrefix) {
        const currPosStr = `${row}_${col}`;
        if (
            row < 0
            || col < 0
            || row === ROW
            || col === COL
            || onPathSet.has(currPosStr)
            || !node.children[board[row][col]]
        )
            return;
        node = node.children[board[row][col]];
        wordPrefix += board[row][col];
        if (node.isWord) {
            resSet.add(wordPrefix);
        }
        onPathSet.add(currPosStr);
        dfs(row + 1, col, node, wordPrefix);
        dfs(row - 1, col, node, wordPrefix);
        dfs(row, col + 1, node, wordPrefix);
        dfs(row, col - 1, node, wordPrefix);
        onPathSet.delete(currPosStr);
    }

    for (let row = 0; row < ROW; row++) {
        for (let col = 0; col < COL; col++) {
            dfs(row, col, root, '');
        }
    }

    return Array.from(resSet);
};