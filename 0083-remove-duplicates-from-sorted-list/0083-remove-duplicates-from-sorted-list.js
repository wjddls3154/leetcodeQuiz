let deleteDuplicates = function(head) {
    if (!head) return null;
    let cur = head, ne = head.next;

    while (ne) {
        if (cur.val === ne.val) {
            cur.next = ne.next;
        } else {
            cur = cur.next;
        }
    	ne = ne.next;
    }

    return head;
};