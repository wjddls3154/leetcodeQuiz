// DP 문제
// ◎
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]


    let dp = [nums[0], Math.max(nums[0], nums[1])];

    // 현재 위치(i) 에서 최대로 가져갈 수 있는 값은, 
    // 이전 위치(n-1)의 누적치와, 현재위치(i)의 금액과 i-2위치의 누적금액의 합 중 최대 금액이다.
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length - 1];
};