// https://leetcode.com/problems/course-schedule/description/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const vNum = numCourses;
    const adj = new Array(vNum);
    for (let i = 0; i < vNum; i++) {
        adj[i] = new Set();
    }
    for (let [w, v] of prerequisites) {
        adj[v].add(w);
    }
    const marked = (new Array(vNum)).fill(false);
    const onStack = (new Array(vNum)).fill(false);
    let hasCycle = false;
    for (let v = 0; v < vNum; v++) {
        if (hasCycle)
            break;
        if (!marked[v]) {
            dfs(v);
        }
    }

    function dfs(v) {
        if (hasCycle)
            return;
        onStack[v] = true;
        marked[v] = true;
        for (let w of adj[v]) {
            if (!marked[w]) {
                dfs(w);
            } else if (onStack[w]) {
                hasCycle = true;
                return;
            }
        }


        onStack[v] = false;
    }
    return !hasCycle;
};