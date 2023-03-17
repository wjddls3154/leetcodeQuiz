var findJudge = function(n, trust) {
    let cnt = Array(n+1).fill(0);
    
    for (let [a, b] of trust) {
        cnt[a] = cnt[a] - 1;
        cnt[b] = cnt[b] + 1;
    }

    for (let i = 1; i < cnt.length; i++) {
        if (cnt[i] == n-1) {
            return i;
        }
    }
    return -1;
};