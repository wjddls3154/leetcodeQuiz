// *동형 설명 *
// 두 개의 문자열, X 그리고 Y 에서 각 문자의 모든 발생이 동형이라고 합니다. X나 Y 에서 얻을 수 있는 것을 다른 문자로 대체할 수 있습니다.

// 예를 들어, ACAB 그리고 XCXY. 이 둘은 우리가 매핑할 수 있는 동형입니다 'A' —> 'X', 'B' —> 'Y' 그리고 'C' —> 'C'.

var isIsomorphic = function(s, t) {
    
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i],i+1) !== t.indexOf(t[i],i+1)) return false;
    };
    
    return true;
};
