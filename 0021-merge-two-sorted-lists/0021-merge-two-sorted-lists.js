const mergeTwoLists = function(sort1, sort2) {
  // sort1,2 둘 다 빈 리스트면 출력도 [], sort1,2 중 하나가 빈 리스트이고 하나가 숫자이면 출력은 숫자이다.
  if (!sort1) return sort2;
  if (!sort2) return sort1;

  // sort1 의 val 보다 sort2 의 val 이 더 큰 경우, sort1 의 next와 sort2 를 다시 비교하게 된다. (재귀) 
  if(sort1.val < sort2.val) {
    sort1.next = mergeTwoLists(sort1.next, sort2);  // .next : 다음 배열 값으로 이동
    return sort1;
      
  // sort2 의 val 보다 sort1 의 val 이 더 큰 경우, sort2 의 next와 sort1 를 다시 비교하게 된다. (재귀)     
  } else {
    sort2.next = mergeTwoLists(sort1, sort2.next);
    return sort2;
  }
};