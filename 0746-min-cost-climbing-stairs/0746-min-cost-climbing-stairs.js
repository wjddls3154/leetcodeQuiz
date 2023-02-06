/*
◎
기본 dp 문제.
i 번째 계단으로 갈 수 있는 계단은 i-1, i-2번째 계단이다.

따라서, i번째 계단으로 갈 수 있는 최소 비용은, 
(i-1번째까지 가는 최소 비용 + i번째 계단을 밟는 비용) 과 
(i-2번째까지 가는 최소 비용 + i번째 계단을 밟는 비용) 둘 중 작은 비용이다.

따라서, 점화식은 아래와 같다.
d[i] = min(d[i-1], d[i-2]); (d[i] = i번째 비용까지 가는데 드는 최소 비용)
시간복잡도는 O(N).
*/

let minCostClimbingStairs = function(cost) {
    
    for (let i = 2; i < cost.length; i++) {
        cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1]);
    }
    
    return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
};
