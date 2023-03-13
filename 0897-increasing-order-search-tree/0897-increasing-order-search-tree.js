var increasingBST = function(root) {
    
  if (!root) {
    return root;
  }
  
  const leftRoot = increasingBST(root.left);
  root.left = null;
  root.right = increasingBST(root.right);
  
  if (!leftRoot) {
    return root;
  }
  
  let lastLeftNode = leftRoot;
    
  while (lastLeftNode.right) {
    lastLeftNode = lastLeftNode.right;
  }
  
  lastLeftNode.right = root;
  return leftRoot;
};