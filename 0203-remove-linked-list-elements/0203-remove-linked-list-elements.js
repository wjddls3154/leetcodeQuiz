let removeElements = function(head, val) {
    
    while ( head && head.val === val ){
        head = head.next;
    }
    if ( head === null ) return head;
    
    var cur = head;
    while ( cur.next !== null ){
        if( cur.next.val !== val ){
            cur = cur.next;
        }
        else {
            cur.next = cur.next.next;
        }
    }
    return head;
};
