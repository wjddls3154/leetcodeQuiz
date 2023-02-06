// memoization : 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써, 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술
// 이를 사용함으로써, 재귀 피보나치보다 성능이 훨씬 뛰어나다.

// 메모이제이션 사용
const data = {
  // 피보나치 수열은 fibonacci[0]과 fibonacci[1]이 1이다.
  "0": 1,
  "1": 1,
};

const climbStairs = function (n) {
    
  // n이 0,1 이면 1 반환
  if (n <= 1) return 1;
  
  // 그리고, i를 2로 잡고 반복문 실행.
  for (let i = 2; i <= n; i++) {
    data[i] = data[i - 1] + data[i - 2];
      
    // Ex) data[2] = data[1] + data[0] = 2
    // 왜냐, data[1], data[0] 은 1이다.
  }
  return data[n];
};