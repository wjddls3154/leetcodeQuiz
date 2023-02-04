// 1. head 이전에 있는 node 를 prev 라는 이름으로 null 을 가진 변수를 만들어줍니다.
// ( 만약, head 가 인덱스 1번 자리라면, prev는 인덱스 0번 자리의 위치라는 것 )
// 2. 그리고, current 라는 null 을 가진 새로운 변수를 만든다.
// 3. LinkedList 에서 화살표의 방향을 바꾸기전에, 포인터들을 이동해줍니다. ( null 이었던 current 를 head.next 위치로 이동 )
// 4. 이제, 화살표 방향을 바꿀 차례입니다. head.next 를 사용해서 head 다음을 거꾸로 prev(null) 를 가리키도록 합니다.
// 5. 그렇게, 포인터들을 이동하고 화살표 방향을 바꿔주는 이 동작을 반복문으로 계속 돌려줍니다.
// 6. 그러다, head 가 null 을 가리키게 되면, linkedList 가 역순으로(반전) 됩니다.
// 그림으로 설명: https://leetcode.com/problems/reverse-linked-list/discuss/1449712/Easy-C%2B%2BJavaPythonJavaScript-Explained%2BAnimated

var reverseList = function(head) {
    
    let prev = null
    let current = null
    
    while(head){
        current  =  head.next
        head.next = prev
        prev = head
        head = current 
    }
    
    return prev
        
};
