// 피봇 인덱스 기준으로, 좌측 우측 합 구하기
var pivotIndex = function(nums) {
    let totalSum = 0;  // 총 합
    for(let i =0; i< nums.length; i++) {
        totalSum += nums[i];
    }
    
    let leftSum = 0;  // 좌측 합
    for(let j=0; j<nums.length; j++) {
      if(totalSum - leftSum - nums[j] == leftSum) {
          return j;
      }
      else {
          leftSum += nums[j];
      }
    }
    return -1;
};
console.log(pivotIndex([2,1,-1]));
