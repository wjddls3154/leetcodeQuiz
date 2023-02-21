// 1부터 ~ 차례대로 증가하는 배열에서 누락된 k번째 양의 정수를 반환하는 문제.

var findKthPositive = function(arr, k) {
    let missNum = 0;
    
    // 정수 배열은 1부터시작, missNum 이 k와 다르면 반복문 계속 돌아감.
    for ( let i = 1; missNum != k; i++ ) {
        
        // 만약, 정수 배열 arr에서 i가 포함되지 않는다면 ? missNum 을 1 증가시킨다.
        if (!arr.includes(i)) missNum++;
        
// 반복문을 돌리면서 missNum을 계속 증가시키다가, missNum이 k와 같아지면, 그 숫자가 누락된 k번째 양의 정수이기에 반환한다.
        if (missNum === k) return i;  
    }
    
};