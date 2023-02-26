// 투 포인터 문제, 시간 복잡도 : O(n) , 공간 복잡도 : O(n)
var sortedSquares = function(nums) {
    const length = nums.length;
    const result = [];
    
    let left = 0;  // 포인터 1
    let right = nums.length-1; // 포인터 2
    
    for(let i = length-1; i >= 0; i--) {
        // 만약, 절대값(abs) right 가 left 보다 크다면
        if (Math.abs(nums[left]) < Math.abs(nums[right]))  {
            result[i] = nums[right] * nums[right];
            right--;
        } else {
            result[i] = nums[left] * nums[left];
            left++;
        }
    }
    return result;
};