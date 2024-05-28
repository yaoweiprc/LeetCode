// https://leetcode.com/problems/pacific-atlantic-water-flow/description/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    class Graph {
        v;
        adj;
        constructor(v) {
            this.v = v;
            this.adj = new Array(v);
            for (let i = 0; i < v; i++) {
                this.adj[i] = new Set();
            }
        }
        addEdge(v, w) {
            this.adj[v].add(w);
        }
    }
    const g = new Graph(m * n + 2);
    const PACIFIC_V = 0;
    const ATLANTIC_V = m * n + 1;
    function idxToGraphV(i, j) {
        return i * n + j + 1;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const idxInGraph = idxToGraphV(i, j);
            if (i === 0 || j === 0) {
                g.addEdge(PACIFIC_V, idxInGraph);
            }
            if (i === m - 1 || j === n - 1) {
                g.addEdge(ATLANTIC_V, idxInGraph);
            }
            if (i - 1 >= 0) {
                if (heights[i - 1][j] >= heights[i][j]) {
                    g.addEdge(idxInGraph, idxToGraphV(i - 1, j));
                }
            }
            if (i + 1 < m) {
                if (heights[i + 1][j] >= heights[i][j]) {
                    g.addEdge(idxInGraph, idxToGraphV(i + 1, j));
                }
            }
            if (j - 1 >= 0) {
                if (heights[i][j - 1] >= heights[i][j]) {
                    g.addEdge(idxInGraph, idxToGraphV(i, j - 1));
                }
            }
            if (j + 1 < n) {
                if (heights[i][j + 1] >= heights[i][j]) {
                    g.addEdge(idxInGraph, idxToGraphV(i, j + 1));
                }
            }
        }
    }
    function dfs(g, s) {
        const marked = (new Array(g.v)).fill(false);
        dfsRe(g, s);
        return marked;
        function dfsRe(g, v) {
            marked[v] = true;
            for (let w of g.adj[v]) {
                if (!marked[w]) {
                    dfsRe(g, w);
                }
            }
        }
    }
    const marked1 = dfs(g, 0);
    const marked2 = dfs(g, m * n + 1);
    const res = [];
    function vToIJ(v) {
        v = v - 1;
        let i = Math.floor(v / n);
        let j = v % n;
        return [i, j];
    }
    for (let v = 0; v < m * n + 2; v++) {
        if (v !== 0 && v !== m * n + 1 && marked1[v] && marked2[v]) {
            res.push(vToIJ(v));
        }
    }
    return res;
};