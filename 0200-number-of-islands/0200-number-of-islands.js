/* ◎
이 문제에는 두 가지 엣지 케이스가 있습니다.
1. 배열의 네 모서리 grid는 모두 물로 둘러싸여 있습니다(그리드에서 벗어나 있는지 확인해야 한다.)
2. 각각을 한 번만 방문해야 합니다 (무한 재귀 방지).
*/

// DFS
const numIslands = (grid) => {
  let counter = 0;

  const dfs = (i, j) => {
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === '1'
    ) {
      grid[i][j] = '0';
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        counter += 1;
        dfs(i, j);
      }
    }
  }

  return counter;
};
