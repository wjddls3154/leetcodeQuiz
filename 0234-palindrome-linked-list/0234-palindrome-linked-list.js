var isPalindrome = function(head) {
    let current = '', reverse = '';
    while(head) {
        current += head.val;
        reverse = head.val + reverse;
        head = head.next;
    }
    return current === reverse;
};