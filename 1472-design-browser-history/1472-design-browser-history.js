var BrowserHistory = function(homepage) {
    this.homepage = homepage;
    this.currentUrl = new Node(homepage);
};


// 페이지 방문
BrowserHistory.prototype.visit = function(url) {
    this.currentUrl = this.currentUrl.insert(url);
};


// 페이지 뒤로 가기
BrowserHistory.prototype.back = function(steps) {
    while(steps > 0 && this.currentUrl.prev !== null) {
        this.currentUrl = this.currentUrl.prev;
        steps--;
    }
    return this.currentUrl.val;
};

// 페이지 앞으로 가기
BrowserHistory.prototype.forward = function(steps) {
    while(steps > 0 && this.currentUrl.next !== null) {
        this.currentUrl = this.currentUrl.next;
        steps--;
    }
    return this.currentUrl.val;
};


// 단일 리스트 사용
function Node(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
}

Node.prototype.insert = function(val) {
    const node = new Node(val);

    if (this.next === null) {
        this.next = node;
        node.prev = this;
    } else {
        let nextNode = this.next;
        this.next = node;
        node.prev = this;
        
        if (nextNode !== null) {
            nextNode.prev = node;
        }
    }
    
    return node;
}