// 피보나치 수열 문제
// 재귀식으로 풀면 시간 복잡도 : O(2^N) , 공간 복잡도 : O(N)
// 아래 처럼 반복식으로 풀면 시간 복잡도 : O(N) , 공간 복잡도 : O(N)

var fib = function(n) {
    let fibona = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibona.push(fibona[i - 1] + fibona[i - 2]);
    }
    return fibona[n];
};
