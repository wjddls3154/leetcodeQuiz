var rangeSumBST = function(root, low, high) {
    let sum = 0 ;
    
    const dfs = (root, L, H) => {
        if (!root) {
            return;
        }
        if (root.val <= H && root.val >= L) {
            sum += root.val;
        }
        if (root.val > L) {
            dfs(root.left, L, H);
        }
        if(root.val < H) {
            dfs(root.right, L, H);
        }
    }
    
    dfs(root, low, high);
    return sum;
};
