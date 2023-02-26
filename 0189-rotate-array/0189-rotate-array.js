// ◎
let rotate = function(nums, k) {
   if (nums.length < k) k %= nums.length;
    
   let arr = nums.splice(0, nums.length-k);
   arr.forEach( n => nums.push(n));
};