// 트리 순회 : preorder(전위) 루트 → 왼쪽 → 오른쪽 순서

var preorder = function(root) {
    
    // 방문한 노드를 저장하는 result
    var result = [];
    
    // 첫번째 자식 노드의 값은 null이기에 root값이 있는지 체크
    if (!root) {
        return [];
    }
    
    // 자식노드가 없으면, 현재 노드 값 반환
    if (root.children.length === 0) {
        return [root.val];
    }
    
    // 현재 노드를 배열에 포함
    result.push(root.val);
    
// 재귀함수를 통해, 각 자식노드의 값을 결과값에 포함시켜 새로운 배열을 만듦
    for (var i = 0; i < root.children.length; i++) {
        result = result.concat(preorder(root.children[i]));
    }
    return result;
};
