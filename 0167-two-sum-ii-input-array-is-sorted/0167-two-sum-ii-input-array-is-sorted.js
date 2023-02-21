// 오름차순으로 정렬된 배열이 주어졌을 때, 두 인덱스 요소의 합이 target과 일치하는 배열의 인덱스를 반환하는 문제입니다.
// 인덱스는 1부터 시작

// 투포인터 활용
var twoSum = function(numbers, target) {
    
    // 배열의 왼쪽 오른쪽에서 포인터 시작
    let left = 0;
    let right = numbers.length-1;
    
    // 배열 오른쪽 포인터의 값이, 왼쪽 포인터보다 클동안 while문 돌아간다.
    while(left < right) {
        const sum = numbers[left] + numbers[right];
        
        // 두 인덱스 합 sum(left+right)이, 우리가 목표하는 값(target) 과 같을 경우, +1만 해서 반환해준다.
        // +1 하는 이유 : 인덱스는 원래 0부터 시작이나, 우리 문제 예제에서는 인덱스가 1부터 시작.
        if(sum === target) return [left+1, right+1]
        
        // 삼항연산자 이용 : sum 이 target 보다 큰가 ? 크다면 더 작은 숫자를 사용해야하므로 right을 감소시키고,
        // 작다면, 더 큰 숫자를 사용해야하므로 left를 증가시킨다.
        sum > target ? right-- : left++
    }
};
