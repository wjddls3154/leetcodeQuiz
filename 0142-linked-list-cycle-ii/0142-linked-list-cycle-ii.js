// 토끼와 거북이 알고리즘 문제 
// ( 연결리스트를 탐색하기 위해 두 개의 속도가 다른 포인터를 사용하여, 사이클의 존재여부를 파악 = Runner 기법 )

const detectCycle = function(head) {

    if(head === null) return null;

    // 두 개의 포인터를 둔다
    let fast = head; // ( 토끼 )
    let slow = head; // ( 거북이 )

    while(fast && fast.next){ 
        fast = fast.next.next;  // 토끼는 2칸씩 이동
        slow = slow.next;  // 거북이는 1칸씩 이동

 // 둘이 같아진다 = 두 포인트가 만나는 지점이 있다 = 사이클이 존재한다.
 // 사이클이 존재할 때, 둘 중 한 포인터를 head 에 두고, 두 포인터 모두 한 칸씩만 움직이게 한다. 움직이다보면 두 포인터가 만나는 지점이 있다. 그 부분이 바로 사이클 시작지점이다.
        if(fast === slow){
            fast = head;
            
            while(fast !== slow){
                slow = slow.next;
                fast = fast.next;
            }
            return fast;
        }
    }
    return null;    
};