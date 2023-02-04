// 이진 검색 문제.
// 이진 검색을 수행하려면, 정렬된 배열이 필요하다.

const search = function(nums, target) { 
  let left = 0; 
  let right = nums.length - 1; 
  let mid = Math.floor((left + right) / 2); 
  
  while (left <= right) { 
  // 먼저, 배열의 중간에 있는 요소가 찾고 있는 대상과 같은지 확인한다.
      if (nums[mid] === target) { 
        return mid;  // 같으면 반환  
// 만약, 중간 값이 찾고 있는 요소보다 크면, 오른쪽의 나머지 절반 전체를 제거
      } else if (nums[mid] > target) { 
          right = mid - 1; 
// 만약, 중간 값이 찾고 있는 요소보다 작으면, 왼쪽의 나머지 절반 전체를 제거
      } else { 
          left = mid + 1; 
      } 
  // 그런 다음, 범위를 재설정 하는 프로세스를 요소를 찾을때까지 반복 수행.    
      mid = Math.floor((left + right) / 2);
  } 
  
  // 만약, 찾는 요소가 존재하지 않으면 -1 반환
  return -1; 
};
