// 정렬되지 않은 배열들의 요소 중, 음수에 해당하는 개수를 찾는 문제.

var countNegatives = function(grid) {
    
    // flat() 이용해서 중첩 배열 해제시켜 평탄화 함.
    // 그리고, filter 메서드 이용해서, 음수에 해당하는 숫자의 길이를 반환 받음.
    return grid.flat().filter( x => x < 0).length;
};