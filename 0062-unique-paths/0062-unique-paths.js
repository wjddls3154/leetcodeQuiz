// ◎
// dp
var uniquePaths = function(m, n) {
    
    // dp 배열 만들기
    const dp = new Array(n + 1).fill(1);

    // dp 배열 채우기
    for(let row = m - 1; row > 0; row--){
        for(let col = n - 1; col > 0; col--){
            dp[col] = dp[col] + dp[col + 1];
        }
    }
    return dp[1];
}