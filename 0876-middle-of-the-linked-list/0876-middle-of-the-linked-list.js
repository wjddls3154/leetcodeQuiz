
var middleNode = function(head) {
    let currentNode = head;
    let length = 0;
    
    // LinkedList 전체 길이 구하기
    while(currentNode != null) {
        length++;
        currentNode = currentNode.next;
    }
    
    // head를 Linkedlist 의 중앙으로 옮기기 위해서, for문으로 길이의 절반만큼 돌면서 head 이동. ( 이때, 길이가 홀수일경우 소숫점이 나오기에 pareseInt 이용해서 정수형으로 만듦. )
    for(let i = 0; i< parseInt(length/2); i++) {
        head = head.next;
    }
    return head;
};