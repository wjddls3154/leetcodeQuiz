// 피보나치 수열 문제
var tribonacci = function(n) {
    let arr = new Array(n+1);
    
    function fibbo(n) {
        if (n === 0) return 0;  // T0 = 0
        if (n === 1) return 1;  // T1 = 1
        if (n === 2) return 1;  // T2 = 1
        
        // arr[n]이 undefined 가 아니면 arr[n] 을 반환
        if (arr[n] !== undefined) return arr[n];
        
        // arr[n] 에 피보나치 수열 적용
        arr[n] = fibbo(n-1) + fibbo(n-2) + fibbo(n-3);
        return arr[n];
    }
    return fibbo(n);
};