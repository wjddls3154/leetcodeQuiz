var findCenter = function(edges) {
    const [ [a,b],[c,d] ] = edges;
    return a === c || a === d ? a : b;
};