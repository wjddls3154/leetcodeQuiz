// 0과 1로 이루어진 2차원 배열이 있을 때, 상하좌우 1로 이어진부분이 섬이다.
// 가장 큰 섬의 너비를 리턴하는 문제
// ◎

var maxAreaOfIsland = function(grid) {
    const R = grid.length, C = grid[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let maxArea = 0
    
    for(let r = 0; r < R; r++) {
        for(let c = 0; c < C; c++) {
            if(grid[r][c]) {
                const area = callDFS(r, c);
                maxArea = Math.max(area, maxArea)
            }
        }
    }
    return maxArea;
    
    // DFS 함수
    function callDFS(r, c) {
        if(r < 0 || c < 0 || r >= R || c >= C || !grid[r][c]) return 0;
        
        grid[r][c] = 0;
        let sum = 1;
        
        for(let [dr, dc] of dir) {
            sum += callDFS(r+dr, c+dc);
        }
        return sum;
    }
};