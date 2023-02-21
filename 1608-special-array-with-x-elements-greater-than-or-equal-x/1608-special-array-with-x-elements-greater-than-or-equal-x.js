// ◎
var specialArray = function(nums) {
    
    nums.sort( (x,y) => x - y);  // 먼저 nums 배열을, 오름차순으로 정렬한다.
    
    let idx = 1;
    
    while (idx <= nums[nums.length-1]) {
        let num = 0;
        
        for (let i = 0; i < nums.length; i++) {
            
            // 만약, nums[i]번째 인덱스가 idx 보다 크면, num 증가한다.
            if (nums[i] >= idx) {
                num++;
            }
        }
        // 그러다, num과 idx가 같아지면, idx를 반환한다.
        if (num === idx) {
            return idx;
        }
        // 그외는 idx 를 1 증가 시킨다.
        idx++;
    }
    
    // 배열이 특수하지 않은 경우 -1을 반환한다.
    return -1;
};