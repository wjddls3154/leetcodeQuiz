var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
    this.front = null;
};


// push : 스택의 맨 위에 새로운 값 추가
MyQueue.prototype.push = function(x) {
    if (this.stack1.length == 0) {
        this.front = x;
    }
    this.stack1.push(x);
};


// pop : 스택의 맨 위에 있는 값 제거
MyQueue.prototype.pop = function() {
    if (this.stack2.length == 0) {
        
        while (this.stack1.length !=0) {
            this.stack2.push(this.stack1.pop());
        }
        
    }
    return this.stack2.pop();
};

// peek : 스택의 맨 위에 있는 값 조회만하고, 제거하지는 않음
MyQueue.prototype.peek = function() {
    return this.stack2.length == 0 ? this.front : this.stack2[this.stack2.length-1]
};


// empty : 스택이 비어있는지 확인 : true OR false
MyQueue.prototype.empty = function() {
    return this.stack1.length == 0 && this.stack2.length == 0
};
