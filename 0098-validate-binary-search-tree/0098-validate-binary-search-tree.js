// ◎
// 이진 탐색 트리 특징
// 1. 모든 부모 노드는 최소한 두 자식 노드를 갖는다.
// 2. 부모 노드를 기준으로, 왼쪽 노드는 부모 노드보다 작은 수가 오고, 오른쪽 노드는 부모 노드보다 큰 수를 가진다.
// 3. 모든 원소는, 서로 다른 유일한 키값을 갖는다.

var isValidBST = function(root) {
    return helper(root, null, null);
}

function helper(node, low, high) {
    if (node === null) return true;
    const val = node.val;
    if ((low !== null && val <= low) || (high !== null && val >= high)) 
        return false;
    return helper(node.right, val, high) && helper(node.left, low, val);
}
