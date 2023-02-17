// 오름차순 숫자 배열과, target 숫자가 제공된다.
// 배열에서 대상 숫자의 첫 번째 인덱스와 마지막 인덱스를 찾는 문제이다. 
// 만약, 대상이 없으면, [-1, -1] 를 반환한다.
// ◎

var searchRange = function(nums, target) {
    
    // 만약, 배열이 아예 없으면 [-1, -1] 반환
    if (nums.length === 0) {
        return [-1,-1];
    }
    
    // 이진 탐색
    let left = 0, right = nums.length - 1;
    while(left < right) {
        const mid = parseInt( (left + right) / 2 );
        // 중간 값이 target 이상인가 ?
        nums[mid] >= target ? right = mid : left = mid + 1;
    }
    // 만약, 왼쪽값과 목표값이 다르면 [-1, -1] 반환
    if (nums[left] !== target) {
        return [-1,-1];
    }
    
    const a = left; right = nums.length - 1;
    while (left < right) { 
        const mid = parseInt((left + right) / 2);
        // target 이 중간값 이상인가 ?
        nums[mid] <= target ? left = mid + 1 : right = mid;
    }
    return nums[right] === target ? [a, right] : [a, right - 1];
};