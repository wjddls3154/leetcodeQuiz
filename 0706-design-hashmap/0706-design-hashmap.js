var MyHashMap = function() {
    this.map = {}
};


MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value
};


MyHashMap.prototype.get = function(key) {
    const value = this.map[key]
    return value === undefined ? -1 : value
};


MyHashMap.prototype.remove = function(key) {
    if(this.map.hasOwnProperty(key)) {
        delete this.map[key]
    }
};
