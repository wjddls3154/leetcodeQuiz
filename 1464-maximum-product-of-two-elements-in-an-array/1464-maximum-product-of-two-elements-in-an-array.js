let maxProduct = function(nums) {
   let max = 0;
    
   for (let i = 0; i < nums.length; i++) {
       let j = i+1;
       
       while (j < nums.length) {
           let k = (nums[i]-1) * (nums[j]-1);
           max = Math.max(max, k);
           j++;
       }
       
   } 
   return max; 
};
