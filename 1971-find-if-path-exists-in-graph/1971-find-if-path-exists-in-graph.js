var validPath = function(n, edges, source, destination) {
    let map = new Map();
    let find = false;
    
    for (let i = 0; i < n; i++) {
        map.set(i, new Set())
    }
    
    for (const[x,y] of edges) {
        map.get(x).add(y);
        map.get(y).add(x)
    }
    
    
    const visited = new Set();
    function dfs(gr) {
        
        if ( visited.has(gr) ) return;
        visited.add(gr);
        if (gr === destination) {find = true; return;}
        
        for (const z of [...map.get(gr)]) {
            dfs(z);
            visited.add(z)
        }
        visited.delete(gr);
    }
    dfs(source);
    return find;
    
};