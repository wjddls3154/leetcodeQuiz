var minimumOperations = function(nums) {
    // 오름 차순 정렬 ( 낮은 수 부터 ~ 큰 수 )
    nums.sort( (a,b) => a-b);
    
    let i = 0;
    let cnt = 0;
    
    while (i < nums.length) {
        
        // 만약, 0이면 i만 1 증가시키고 계속 진행
        if (nums[i] === 0) {
            i++;
            continue;
        }
        
        let sub = nums[i];  
        // 0이 아니면 빼주고 cnt 증가
        for (let j = i; j < nums.length; j++) {
            nums[j] -= sub;
        }
        cnt++;
    }
    return cnt;
};