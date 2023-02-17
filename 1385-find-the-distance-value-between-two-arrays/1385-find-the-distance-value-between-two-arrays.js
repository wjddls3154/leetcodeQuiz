// arr1 인덱스와, arr2의 모든 요소를 절대값으로 빼면서 d보다 큰지 확인, 조건이 성립되면 1

/*
For arr1[0]=4 we have: (통과)
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
For arr1[1]=5 we have: (통과)
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
For arr1[2]=8 we have: (실패)
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2

고로, output = 2
*/

var findTheDistanceValue = function(arr1, arr2, d) {
    
    // array.filter로 거른다. 무엇을 ? arr2의 every(모든 요소들) 중에서, 절대값(abs) n1 - n2 가 d보다 큰.
    return arr1.filter(a1 => arr2.every(a2 => Math.abs(a1 - a2) > d)).length;
};