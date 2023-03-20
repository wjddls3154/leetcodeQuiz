let largestInteger = function(num) {
    const oddNum = [];
    const evenNum = [];
    const nums = String(num).split('');
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) evenNum.push(parseInt(nums[i]));
        else oddNum.push(parseInt(nums[i]));
    }
    
    oddNum.sort( (a,b) => a-b);
    evenNum.sort( (a,b) => a-b);
    
    const largestNum = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) largestNum.push(evenNum.pop());
        else largestNum.push(oddNum.pop());
    }

    return largestNum.join('');
};