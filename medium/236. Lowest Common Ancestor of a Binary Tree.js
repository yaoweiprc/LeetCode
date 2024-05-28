// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    let pMarked = false;
    let qMarked = false;
    dfs(root);
    function dfs(node) {
        if (node === null)
            return;
        if (lca !== null)
            return;
        const neitherMarkedBefore = !pMarked && !qMarked;
        if (node === p)
            pMarked = true;
        if (node === q)
            qMarked = true;
        dfs(node.left);
        dfs(node.right);
        const bothMarkedAfter = pMarked && qMarked;
        if (neitherMarkedBefore && bothMarkedAfter && lca === null) {
            lca = node;
        }
    }
    return lca;
};