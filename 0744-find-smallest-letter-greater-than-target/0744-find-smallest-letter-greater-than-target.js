/*
내림차순으로 정렬된 "letters" 문자 배열과, "target" 문자가 제공된다.
( letters 문자 배열에는 최소한 두 개의 다른 문자가 있다. )
사전 순으로, "target"보다 큰 "letters" 문자 배열 중에서 가장 작은 문자를 반환하는 문제이다.
만약, 이러한 문자가 존재하지 않으면, letters 문자 배열의 첫 번째 문자를 반환해라.
*/

var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i <= letters.length; i++) {
        if (letters[i] > target) return letters[i];
    }
    return letters[0];
};