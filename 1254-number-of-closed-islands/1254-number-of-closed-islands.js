/*
주어진 2D 그리드는 0(육지)과 1(물)로 구성된다. 
섬은 0으로 이루어진 최대 4방향 연결 그룹이며, 닫힌 섬은 1로 둘러싸인 완전한 섬이다. 닫힌 섬 수를 반환하는 것이 문제.
◎
*/

var closedIsland = function (grid) {
  let island = 0;
    
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        island += dfs(i, j, grid);
      }
    }
  }
  return island;
};

// dfs 함수
function dfs(r, c, grid) {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length) return 0;
  if (grid[r][c] === 1) return 1;
  grid[r][c] = 1;
    
  const top = dfs(r + 1, c, grid);
  const bottom = dfs(r - 1, c, grid);
  const right = dfs(r, c + 1, grid);
  const left = dfs(r, c - 1, grid);
  
  if ((top + bottom + right + left) === 4) return 1;
  return 0;
}