// 이진 탐색 트리 문제
// 가장 낮은 공통 조상 (LCA) 찾기
//  "가장 낮은 공통 조상은, 두 노드 p와 q 사이에서, p와 q를 모두 하위 노드로 갖는 T의 가장 낮은 노드로 정의된다. 노드가 자체의 하위 항목이 될 수도 있다."
// Ex) p=2, q=8 LCA = 6,  p=2, q=4 LCA = 2,  p=2, q=1 LCA = 2 


// 이진 검색 트리 공통 노드를 찾으려면, p <= node.val <= q 만족하는 노드 찾기
var lowestCommonAncestor = function(root, p, q) {
    
    // 만약, p,q가 root보다 크면, 오른쪽 트리에서 검색
    if (p.val > root.val && q.val > root.val)
        return lowestCommonAncestor(root.right, p, q);
    
    // 만약, p,q가 root보다 작으면, 왼쪽 트리에서 검색
    if (p.val < root.val && q.val < root.val)
        return lowestCommonAncestor(root.left, p, q);
    
    return root;
};
