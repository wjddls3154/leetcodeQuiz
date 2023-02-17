// 음이 아닌 정수, 즉, 양의 정수 x가 주어지면, x의 제곱근을 계산하고 반환하는 문제.
var mySqrt = function(x) {
    
    // floor(올림) 함수와, sqrt(제곱근) 함수 사용.
    return Math.floor(Math.sqrt(x));
};