// level order : 트리의 각 노드의 레벨에 따른 순서
// Level order traversal : 이는 Queue를 사용하는 순회방법이다.
// root 먼저 방문후 left, right를 방문한다. 
// 간단히 말하면, 위에서부터 차례대로 아래로 가면서 출력한다고 생각하면 된다.
// Ex)  1
//     2 3
//    4 5 6  을 1,2,3,4,5,6 으로 출력해준다.

var levelOrder = function(root) {
    
    // BFS 방식
    const answer = [];
    if(!root) return answer;
    
    // queue에 root node 를 삽입한다.
    const queue = [root];
    
    
    // queue 의 요소가 없을 때까지, 아래 작업을 반복
    while(queue.length){
        const ans = []; // 각각의 level에 있는, node의 값을 변수에 저장.
        const len = [...queue].length; // 현재, queue 의 길이를 변수에 저장.
        
// 현재, queue 의 길이만큼 반복하면서, 앞에 있는 요소들의 값을 shift 해준다.
        for(let i =0; i < len; i++){
            const node = queue.shift();
            ans.push(node.val); // 해당 값의 val를, ans에 push
            
// 해당 node의 left, right 존재 여부 확인후, 있으면 queue에 push.           
            if(node.left) queue.push(node.left); 
            if(node.right) queue.push(node.right); 
        }
        answer.push(ans); // answer에, ans 값을 push
    }
    
    
    return answer;
};
