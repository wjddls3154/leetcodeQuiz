let evaluateTree = (root) => dfs(root);

const dfs = (root) => {
    if (!root) return;
    
    if (root.val == 0) return false;
    if (root.val == 1) return true;
    if (root.val == 2) return dfs(root.left) || dfs(root.right);
    if (root.val == 3) return dfs(root.left) && dfs(root.right);
}