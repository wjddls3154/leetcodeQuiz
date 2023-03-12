var MyHashSet = function() {
    this.set = []
};

// 추가하기
MyHashSet.prototype.add = function(key) {
    if(this.set.indexOf(key) === -1){
        this.set.push(key)
    } 
};

// 제거하기
MyHashSet.prototype.remove = function(key) {
    const index = this.set.indexOf(key)
    if(index >= 0) {
        delete this.set[index]
    }
};

// 내용이 존재하는지 확인
MyHashSet.prototype.contains = function(key) {
    return this.set.indexOf(key) >= 0
};

