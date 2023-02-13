// O(N) 의 복잡도로 한 번만 배열을 순회해서 최대값을 구할 수 있는 알고리즘 Kadane's 알고리즘 사용

var maxSubArray = function(nums) {
    
    // 이전 값이 음수이면, 현재의 값에 더하지 않고, 양수일 때만 현재 값에 더해서 저장한다. (최대 sum을 위해)
    nums.forEach((value, idx) => {
        if (nums[idx-1] > 0) nums[idx] = value + nums[idx-1];
    })
    
    return Math.max(...nums); // 배열의 가장 큰 값 return
};
