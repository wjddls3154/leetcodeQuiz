// ◎
var numEnclaves = function(A) {
    let result = 0;
    for(let row = 0; row < A.length; row++){
        for(let col = 0; col < A[row].length; col++){
            if(A[row][col] == 1) {
                let localResult = dfs(row,col, 0);                
                if(localResult != -Infinity)
                    result += localResult;
            }
        }
    }
    
    return result;
    
    // dfs
    function dfs(row, col, area) {
        if(row < 0 || col < 0 || row >= A.length || col >= A[0].length || A[row][col] == 0) return area;
        
        if((row == 0 || col == 0 || row == A.length-1 || col == A[0].length - 1) && A[row][col] == 1) {
            area = -Infinity;
        }
       
        area++;
        A[row][col] = 0;
        area = dfs(row-1, col, area);           // top
        area = dfs(row+1, col, area);           // bottom
        area = dfs(row, col-1, area);           // left
        area = dfs(row, col+1, area);           // right
                  
        return area;
    }
};