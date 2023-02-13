// target 이 배열에 있다면, 해당 인덱스를 출력하고,
// target 이 배열에 없다면, 오름차순인 배열에서, target이 들어가야할 자리의 인덱스를 출력한다.

var searchInsert = function (nums, target) {
  let left = 0;  // 왼쪽
  let right = nums.length - 1;  // 오른쪽
  let middle = Math.floor((left + right) / 2);  // 중간
    
  // nums[middle] 의 값이 target 과 다르고 right 이 left 이상일때 반복문 돌아감  
  while (nums[middle] !== target && left <= right) {
      
    // 만약, target이 작으면 right을 한칸 왼쪽으로 땡긴다.    
    if (target < nums[middle]) {  
      right = middle - 1;
    } else { 
      // 만약, target이 더 크면 left를 한칸 오른쪽으로 땡긴다.  
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);  // middle은 그렇게 나온 right과 left를 더한 값을 2로나눠서 올림 한다.
  }
    
  // 마지막에, nums[middle] 의 값이 target 과 같다면 middle 값을 반환하고, 다르면 left 반환.
  return nums[middle] === target ? middle : left;
};
