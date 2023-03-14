var RecentCounter = function() {
    this.counter = [];
};

RecentCounter.prototype.ping = function(t) {
    this.counter.push(t);  // 우리가 ping을 받을 때마다, count 에 시간을 더해라
  
    
    // t - 3000 범위에 포함되지 않는 시간을 제외하려면, 계산된 범위보다 작은 동안(반복문이 돌아가는 동안) 카운터에서 첫 번째 요소를 제거합니다.
    while(this.counter[0] < t - 3000){ 
      this.counter.shift();
  } 
    // 루프가 종료되면, 호출 길이가 배열 길이가 됩니다.
    return this.counter.length;
};