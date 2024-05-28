// https://leetcode.com/problems/word-ladder/description/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    class Graph {
        #v;
        #adj;
        constructor(vertexNum) {
            this.#v = vertexNum;
            this.#adj = new Array(vertexNum);
            for (let i = 0; i < vertexNum; i++) {
                this.#adj[i] = new Set();
            }
        }
        addEdge(v, w) {
            this.#adj[v].add(w);
            this.#adj[w].add(v);
        }
        adj(v) {
            return this.#adj[v];
        }
    }
    const map = new Map();
    function hasEdge(word1, word2) {
        let count = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i])
                count++;
        }
        return count <= 1;
    }
    wordList.push(beginWord);
    const graph = new Graph(wordList.length);
    const beginWordIdx = wordList.length - 1;
    let endWordIdx;
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] === endWord)
            endWordIdx = i;
        for (let j = 0; j < i; j++) {
            if (hasEdge(wordList[i], wordList[j])) {
                graph.addEdge(i, j);
            }
        }
    }
    const queue = [];
    const distTo = new Array(wordList.length);
    distTo[beginWordIdx] = 0;
    queue.push(beginWordIdx);
    while (queue.length > 0) {
        const currVertex = queue.shift();
        for (let w of graph.adj(currVertex)) {
            if (distTo[w] === undefined) {
                distTo[w] = distTo[currVertex] + 1;
                queue.push(w);
                if (w === endWordIdx) {
                    return distTo[w] + 1;
                }
            }
        }
    }
    return 0;
};