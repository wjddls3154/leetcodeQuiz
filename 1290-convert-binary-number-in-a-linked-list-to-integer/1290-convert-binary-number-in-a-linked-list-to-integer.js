// time O(N) space O(N)

var getDecimalValue = function(head) {
    let arr = "";
    
    while(head !== null) {
        arr += head.val;
        head = head.next;
    }
    
    return parseInt(arr, 2);
};