// palindrome(회문) = 거꾸로 읽어도, 제대로 읽는 것과 같은 문자,숫자
// 가장 긴 Palindrome을 구하는 방법은 뭘까 ?
// 1. 문자열을 구성하는 문자의 개수가 모두 짝수인 경우, 가능하다. 
// ex) 'aabbcc' -> 'aabbcc'
// 2. 문자열을 구성하는 문자의 개수 중 홀수가 포함되어 있는 경우, 개수가 홀수인 문자를 짝수로 활용하거나, 가운데에 홀수인 문자를 배치하여 가능하다. 
// ex) 'aaabbbccc' -> 'abcccba'
// 따라서, 문자열을 구성하는 문자의 개수가 홀수인 경우 이를 짝수로 만들고, 문자열의 가운데에 끼워줄 홀수 개의 문자 1개를 나중에 더하는 방식으로 하였다.

var longestPalindrome = function(s) {
    
    // 입력받은 s를 순회하며 각 글자에 대한 카운트 정보를 담은 keys
    let keys = {};  
    let longest = 0;
  

    for (const char of s) {
        // 키 개체의 문자 개수, keys[char] or 0 이면 + 1 더한다.
        keys[char] = (keys[char] || 0) + 1;
        // 만약, keys[char] 이 짝수이면 가장 긴 변수(longest)에 2를 더한다.
        if (keys[char] % 2 == 0) longest += 2;
    }
// 만약 s.length가 longest보다 크다면, 우리는 회문 중간에 문자를 추가한다.
    return s.length > longest ? longest + 1 : longest;
};