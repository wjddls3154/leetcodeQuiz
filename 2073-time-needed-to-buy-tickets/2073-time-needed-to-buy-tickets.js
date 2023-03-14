var timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  let i = 0;
  
  // k번째 티켓이 0이 아니면,
  while (tickets[k] !== 0) {
      
    // 만약, i가 ticket의 길이와 같아지면 0으로 초기화해준다.  
    if (i === tickets.length) {
      i = 0;
    }
      
    // 만약, i번째 티켓이 0이 아니면,
    if (tickets[i] != 0) {
      tickets[i]--;  // 티켓 - 1
      time++;  // 시간 + 1
    }
    i++;
  }
  return time;
};