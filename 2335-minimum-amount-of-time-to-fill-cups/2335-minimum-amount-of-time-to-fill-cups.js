var fillCups = function(amount) {
    let cnt = 0;
    let max = 0;
    
    for (let i = 0; i < amount.length; i++) {
        max = Math.max(max, amount[i]);
        cnt += amount[i];
    }
	
    if (max >= cnt - max) return max;
    return Math.ceil(cnt / 2);
};