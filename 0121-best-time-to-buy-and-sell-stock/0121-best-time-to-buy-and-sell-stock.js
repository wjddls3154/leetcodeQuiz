// Time Complexity : O(n)
// Space Complexity: O(1)

var maxProfit = function(prices) {
    let profit = 0;  // 수익
    let min = prices[0];  // 구매 일자 ( 가장 싼 가격일 때 )

    // 반복문 통해 최소, 최대 찾는다.
    for(let i = 1; i < prices.length; i++){
    // 가장 싼 날에 구매해야 한다.
    // 구매 일자는, 판매 일자 보다 항상 빠르기에 i-1
        min = Math.min(min, prices[i-1])
// 판매 일자는, 가장 비싼날 가격에서 - 가장 싼날의 가격을 빼야 최대 수익 얻음.
        profit = Math.max(prices[i]-min, profit)
    }
    return profit;
};