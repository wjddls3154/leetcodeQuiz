var allPathsSourceTarget = function(graph) {
    const N = graph.length, result = [];
    
    function DFS(x, y) {
        
        if (x === N-1) {
            result.push([...y, x])
            return;
        }
        
        for (let next of graph[x]) {
            DFS(next, [...y, x]);
        }
    }
    DFS(0, []);
    return result;
};