// 이진 탐색 문제
// 이진 검색을 수행하려면, 정렬된 배열이 필요하다.
// 문제의 배열은 1부터 시작하고, 우리는 0부터 체크하는 것 유의하자.
// API에 대한 호출 수를 최소화 해야한다.

var solution = function(isBadVersion) {
    return function(n) {
        let min = n  
        let left = 0, right = n-1
        
        while(left <= right) {
            // i = 중간 지점
            const i = left + Math.floor((right - left) / 2)
       
    // 만약, true 이면, min 체크 하고, 해당 지점 이전(right=i-1) 탐색     
            if (isBadVersion(i+1)) {
                min = Math.min(min, i)
                right = i-1
   // 만약, false 이면, 해당 지점 이후(left=i+1) 탐색             
            } else left = i+1
        }
        return min + 1  
    };
};
