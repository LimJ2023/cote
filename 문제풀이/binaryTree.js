/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 빈 트리인 경우 0을 반환
    if (!root) return 0;
    
    // 재귀적으로 왼쪽과 오른쪽 서브트리의 깊이를 구하고
    // 그 중 더 큰 값에 1을 더함 (현재 레벨)
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};