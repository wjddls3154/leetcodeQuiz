var SmallestInfiniteSet = function() {
    this.arr = new Array(1000).fill(1);
};

SmallestInfiniteSet.prototype.popSmallest = function() {
    for(let i = 0; i<1000; i++){
        if (this.arr[i]!=0) {
            this.arr[i]=0;
            return i+1;
        }
    }
};

SmallestInfiniteSet.prototype.addBack = function(num) {
    this.arr[num-1] = 1;
};
