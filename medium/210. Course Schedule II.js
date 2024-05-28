// https://leetcode.com/problems/course-schedule-ii/description/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    class Graph {
        #v = 0;
        #adj = new Map();
        constructor(v) {
            this.#v = v;
            for (let i = 0; i < v; i++) {
                this.#adj.set(i, new Set());
            }
        }
        addEdge(v, w) {
            this.#adj.get(v).add(w);
        }
        adj(v) {
            return this.#adj.get(v);
        }
    }
    const g = new Graph(numCourses);
    for (let [w, v] of prerequisites) {
        g.addEdge(v, w);
    }
    const marked = new Array(numCourses).fill(false);
    const onStack = new Array(numCourses).fill(false);
    const res = [];
    let hasCycle = false;
    for (let v = 0; v < numCourses; v++) {
        if (hasCycle) {
            return [];
        }
        if (!marked[v]) {
            dfs(v);
        }
    }

    function dfs(v) {
        if (hasCycle)
            return;
        marked[v] = true;
        onStack[v] = true;
        for (let w of g.adj(v)) {
            if (onStack[w] === true) {
                hasCycle = true;
                return;
            }
            if (!marked[w]) {
                dfs(w);
            }
        }
        onStack[v] = false;
        res.push(v);
    }
    return res.reverse();
};