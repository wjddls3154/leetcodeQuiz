/*
주어진 행렬에서, 1은 병사, 0은 시민을 의미하고 병사는 시민의 왼쪽에만 위치 할 수 있습니다.
이때, 각 row에서 병사의 수가 적은 순서대로 약하고,
만약, 병사의 수가 같을 경우에는, row가 작을 경우 더 약하다고 했을때,
약한 순서대로 row를 반환하는 문제.
◎
*/

var kWeakestRows = function(mat, k) {
    const hmap = {}, results = [];
    
    for (let i = 0; i < mat.length; i++) {
        hmap[i] = 0;
        
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) hmap[i]++;
        }
        results.push(i);
    }
    
    const result = results.sort((a, b) => hmap[a] - hmap[b]);
    return result.slice(0, k);
};