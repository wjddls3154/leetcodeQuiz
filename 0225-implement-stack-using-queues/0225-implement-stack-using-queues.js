let MyStack = function() {
   this.queue=[]; 
};

MyStack.prototype.transfer = function() {
    for(let i = 1; i < this.queue.length; i++){
        this.queue.push(this.queue.shift());
    }
    
}

// push : 스택 맨 위로 값을 추가
MyStack.prototype.push = function(x) {
    this.queue.push(x);
    this.transfer();
};

// pop : 스택의 맨 위에 있는 요소 제거하고 반환
MyStack.prototype.pop = function() {
   
    if(this.empty()) return null;
    return this.queue.shift();
};

// top : 스택의 맨 위에 있는 요소 제거는 안하고 반환
MyStack.prototype.top = function() {
    if(this.empty()) return null;
    return this.queue[0];
};

// empty : 스택이 비어 있으면 true, 비어있지 않으면 false 반환
MyStack.prototype.empty = function() {
   return this.queue.length === 0; 
};
