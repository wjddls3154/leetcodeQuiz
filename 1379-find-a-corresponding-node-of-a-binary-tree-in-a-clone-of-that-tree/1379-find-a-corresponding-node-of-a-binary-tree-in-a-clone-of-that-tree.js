let getTargetCopy = function(original, cloned, target) {
  return dfs(cloned, target);
};

let dfs = function(root, target) {
    
  if (!root) {
    return null;
  }

  if (root.val === target.val) {
    return root;
  }

  let leftResult = dfs(root.left, target);
  let rightResult = dfs(root.right, target);
  
  if (leftResult) {
    return leftResult;
  } else if (rightResult) {
    return rightResult;
  } 
  return null;
}