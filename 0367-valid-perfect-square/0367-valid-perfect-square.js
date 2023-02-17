// sqrt 함수를 사용하지 않고, 완벽한 제곱수면 true, 제곱수가 아니면 false 를 반환하는 문제.

var isPerfectSquare = function(num) {
    let sum = 0;
    
    for(var i = 1; i <= num; i += 2) {
        sum += i;
        if(sum === num) return true;
    }
    return false;
};