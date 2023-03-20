const pickGifts = (gifts, k) => {
    
    for (let i = 0; i < k; i++) {
        gifts.sort( (a,b) => a - b);
        let ele = Math.floor(Math.sqrt(gifts.pop()));
        gifts.push(ele);
    }
    return gifts.reduce( (a,b) => a + b);
};