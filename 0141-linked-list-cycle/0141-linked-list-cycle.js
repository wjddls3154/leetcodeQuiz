let hasCycle = function(head){
    if(head === null) return false;
    
    let tur = head, rab = head;
    
    while(rab && rab.next){
        tur = tur.next;
        rab = rab.next.next;
        //console.log(tur, rab);
        if(tur === rab)
            return true;
    }
    return false;
}
