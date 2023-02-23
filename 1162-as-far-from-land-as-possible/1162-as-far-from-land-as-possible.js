// ◎
var maxDistance = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  const dir = [-1, 0, 1, 0, -1];
  let ans = 0;
    
  while (queue.length > 0) {
    const len = queue.length;
      
    for (let idx = 0; idx < len; idx++) {
      const [oi, oj] = queue.shift();
        
      for (let i = 0; i < dir.length - 1; i++) {
        const ni = oi + dir[i];
        const nj = oj + dir[i + 1];
          
        if (ni < 0 || ni >= n || nj < 0 || nj >= m || grid[ni][nj] === 1) {
          continue;
        }
          
        queue.push([ni, nj]);
        grid[ni][nj] = 1;
      }
        
    }
      
    if (queue.length === 0) break;

    ans++;
  }

  return ans === 0 ? -1 : ans;
};