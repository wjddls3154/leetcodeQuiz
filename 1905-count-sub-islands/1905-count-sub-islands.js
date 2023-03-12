// ◎
var countSubIslands = function(grid1, grid2) {
    let count = 0
    let isSubIsland = true
    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[i].length; j++) {
            if (grid2[i][j] === 1) {
                dfs(i, j)
                if (isSubIsland) count++
                isSubIsland = true
            }
        }
    }
    
    // dfs
    function dfs(raw, col) {
        if (raw >= grid2.length || raw < 0 || col >= grid2[0].length || col < 0 || grid2[raw][col] == 0) return;
        if (grid2[raw][col] === 1 && grid1[raw][col] === 0) {
            isSubIsland = false
            return
        }
        grid2[raw][col] = 0
        dfs(raw - 1, col)
        dfs(raw + 1, col)
        dfs(raw, col - 1)
        dfs(raw, col + 1)
    }
    return count
};