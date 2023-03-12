let mergeNodes = function(head) {
    let res = new ListNode()
    let ans = res;
    let cur = head.next;
    let sum = 0;
    
    while(cur){
            
            // 다음 값이 0이 아니면, sum에 cur 값을 더해준다.
            if(cur.val != 0){
                sum = sum + cur.val;
            }else{
            // 다음 값이 0이면,    
                res.next = new ListNode(sum);
                sum = 0;
                res = res.next;
            }
        cur = cur.next;     
    }
    return ans.next;
};