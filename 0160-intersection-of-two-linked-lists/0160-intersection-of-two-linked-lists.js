let getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) {
        return null;
    }
    
    let n1 = headA;
    let n2 = headB;
    while (n1 !== n2) {
        n1 = n1.next;
        n2 = n2.next;
        if ( n1 === n2 ) {
           return n1;
        }
        if ( n1 === null ) {
          n1 = headB;  
        }
        if ( n2 === null ) {
            n2 = headA;
        }
    }
    return n1;
};