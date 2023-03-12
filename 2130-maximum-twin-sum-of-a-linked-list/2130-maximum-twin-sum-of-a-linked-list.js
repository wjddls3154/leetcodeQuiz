// 가우스 덧셈 짝 중에서 최대값을 반환
let pairSum = function (head) {
    let arr = [];
    let node = head;
    
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    
    let len = arr.length;
    let max = 0;
    
    for (let i = 0; i < len / 2; i++) {
        let sum = arr[i] + arr[len - 1 - i];
        max = Math.max(max, sum);  // max와 sum 중 큰 값 반환
    }
    return max;
};