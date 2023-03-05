/*
이 문제에서 주의할 점 : 첫 번째 집은 마지막 집의 이웃이기 때문에,
- 첫 번째 집을 훔치면, 마지막 집을 훔치면 안된다.
- 마지막 집을 훔치면, 첫 번째 집을 훔치면 안된다.
◎
*/
var rob = function(nums) {
    const subRob = function(nums) {
        const arr1 = [0];
        const arr2 = [0];
        for(let i = 0; i<nums.length; i++) {
            arr1[i+1] = arr2[i] + nums[i];
            arr2[i+1] = Math.max(arr1[i], arr2[i]);
        }
        return Math.max(arr1.pop(), arr2.pop());
    };
    
    if(nums.length<2) {
        return nums.reduce((a,b)=>a+b, 0);
    }else {
        return Math.max(subRob(nums.slice(1)), subRob(nums.slice(0, -1)));
    }
};