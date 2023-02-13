// 추측 게임 : 1부터 ~ n까지 있는 숫자 중 어떤 숫자를 골랐는지 맞히는 문제
// 틀릴때마다, 내가 뽑은 숫자가 네 추측보다 높은지 낮은지 말해준다.
// -1 : 너의 추측보다 나의 숫자가 더 낮다. 
// 1 : 너의 추측보다 나의 숫자가 더 높다.
// 0 : 너의 추측과 나의 숫자가 일치한다.

var guessNumber = function(n) {
    let left = 0;
    let right = n;
    
    // right 이 left 이상이면,
    while (left <= right) {
        
        // mid 값을 구한다.
        let mid = Math.floor((left + right) / 2);
        
        // 만약, mid 값이 0이면 mid를 반환
        if (guess(mid) == 0) {
            return mid;
            
        // mid 값이 -1이면, right을 mid-1 인덱스자리로 이동    
        } else if (guess(mid) == -1) {
            right = mid - 1;
            
        // mid 값이 1이면, left를 mid+1 인덱스자리로 이동    
        } else {
            left = mid + 1;
        }
    }
    return 0;
};