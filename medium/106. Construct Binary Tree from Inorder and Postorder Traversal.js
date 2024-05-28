// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
// best O(n) answer: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/758462/c-detail-explain-diagram

// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const valToIdxInInOrderArr = {};
    for (let i = 0; i < inorder.length; i++) {
        valToIdxInInOrderArr[inorder[i]] = i;
    }
    function buildTree(inOrderStart, inOrderEnd, postOrderStart, postOrderEnd) {
        if (inOrderStart > inOrderEnd || postOrderStart > postOrderEnd) return null;
        const rootVal = postorder[postOrderEnd];
        const root = new TreeNode(rootVal);
        const rootIdxInInOrder = valToIdxInInOrderArr[rootVal];
        root.left = buildTree(
            inOrderStart,
            rootIdxInInOrder - 1,
            postOrderStart,
            postOrderStart + ((rootIdxInInOrder - 1) - inOrderStart)
        );
        root.right = buildTree(
            rootIdxInInOrder + 1,
            inOrderEnd,
            postOrderStart + rootIdxInInOrder - inOrderStart,
            postOrderEnd - 1
        );
        return root;
    }
    return buildTree(0, inorder.length - 1, 0, postorder.length - 1);
};


// My O(n^2) answer:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/*
var buildTree = function(inorder, postorder) {
    const valToIdxInInOrderArr = {};
    for (let i = 0; i < inorder.length; i++) {
        valToIdxInInOrderArr[inorder[i]] = i;
    }
    let root = null;
    function put(node, val) {
        if (node === null) return new TreeNode(val);
        if (valToIdxInInOrderArr[val] > valToIdxInInOrderArr[node.val]) {
            node.right = put(node.right, val);
        } else {
            node.left = put(node.left, val);
        }
        return node;
    }
    for (let i = postorder.length - 1; i >= 0; i--) {
        root = put(root, postorder[i]);
    }
    return root;
};*/
