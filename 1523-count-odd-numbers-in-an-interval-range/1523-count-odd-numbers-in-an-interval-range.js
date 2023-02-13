// low ~ high 사이에 있는 홀수의 개수를 반환하는 문제
var countOdds = function (low, high) {
  let oddCnt = 0;

  for (let i = low; i <= high; i++) {
    // 2로 나누어떨어지지 않는다 = 홀수  
    if (i % 2 !== 0) {
      oddCnt++;
    }
  }

  return oddCnt;
};