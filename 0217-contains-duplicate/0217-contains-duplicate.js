// 배열 안에 중복되는 값이 있으면 true, 없으면 false 를 반환하는 문제

var containsDuplicate = function(nums) {
    let setArr = new Set(nums);  // 중복 허용하지않는, Set 이용
    
    // 만약, 중복이 있다면 SetArr 배열의 크기와, 원본 배열의 크기 (nums.length)가 다를것이다.
    // 이를 이용해서, boolean 값을 반환받는 방식으로 푼다.
    return setArr.size !== nums.length;  
};