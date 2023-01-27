let runningSum = function(nums) {
    let sum = 0;  // 합
    // 반복문 이용해서 차례마다 요소 더해주기
    for(let i = 0; i<nums.length; i++) {
        sum = sum + nums[i]; 
        nums[i] = sum;
    }
    return nums;
};