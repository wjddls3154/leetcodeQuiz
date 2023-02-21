// 계단식으로 코인을 쌓을 때, n 개의 코인으로, 몇층까지 완벽하게 채울수 있는지 확인하는 문제.

var arrangeCoins = function(n) {
    let sum = 1;
    let floor = 1;
    
    // 각 층(floor)마다, 코인을 floor 개씩 놓을 수 있다.
    // while 문을 이용해서, n이 sum보다 크다면 반복문을 계속 실행한다.
    while (sum < n) {
        floor++;  // 층 증가
        sum += floor;  // sum에 floor개 누적 합해준다.
    }
    
    // 만약, sum과 n이 같아지면, 모든 층을 코인으로 채운것이기에 floor를 반환.
    if (sum === n) {
        return floor;
    }
    
    // 그렇지 않다면, floor-1 층까지밖에 코인을 채울수있는것이기에 floor-1을 반환.
    return floor - 1;
    
};