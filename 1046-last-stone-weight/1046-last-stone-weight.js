let lastStoneWeight = function(stones) {
    stones.sort( (a, b) => b - a);
    
    while(stones.length > 1) {
        let maxStone1 = stones[0], maxStone2 = stones[1];
        stones = stones.splice(2);
        
        if(maxStone1 > maxStone2) stones.unshift(maxStone1 - maxStone2);
        stones.sort( (a, b) => b - a);
    }
    
    return stones[0] || 0;
};