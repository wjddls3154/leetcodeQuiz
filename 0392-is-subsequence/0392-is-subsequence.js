// - 예시를 보면, s보다 t가 더 긴 문자열로 나온다. -
// 1. m 과 n 이라는 변수를 만들어, s와 t의 길이를 저장하고, 
// 2. i,j를 이용해서, 반복문으로 s의 문자와 t의 문자를 차례대로 하나씩 비교하며,
// 3. s와 t의 문자가 같으면, i와 j를 동시에 증가시키고,
// 4. s와 t의 문자가 같지 않으면, j만 계속 증가시켜서 s의 기존 문자와 새로운 인덱스의 t의 문자를 비교하는 구조인것이다.
// 5. 그리고, 마지막에 s와 i의 길이가 같으면 true 를 반환해준다.


var isSubsequence = function (s, t) {
    let m = s.length;
    let n = t.length;

    let i, j;
    for (i = 0, j = 0; i < m && j < n; ) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++; // 
        }
    }
    return (i === s.length)? true:false;
};
