// 2차원 배열(행렬)에서 주어진 target값을 찾는 문제. 찾으면 true 를, 못찾으면 false 를 반환. 
var searchMatrix = function(matrix, target) {
    let temp;
    for ( let i = 0; i < matrix.length; i++ ) {
        for ( let j = 0 ; j < matrix[i].length; j++ ){ 
            // 만약, [i][j] 배열의 좌표 값이, 우리가 찾는 target 값과 같다면, true 를 반환한다.
            if ( matrix[i][j] === target ) {
                return true;
            }
        }
        // 만약, 값을 찾지 못하고, 2차원 배열의 끝에 다다르면 false를 반환한다.
        if ( i === matrix.length-1 ) {
            return false;
        }
    }
};