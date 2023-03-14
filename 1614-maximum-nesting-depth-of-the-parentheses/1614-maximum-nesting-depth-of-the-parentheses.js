let maxDepth = function(s) {
   let maxCnt = 0 , cnt = 0; 

   for (let i = 0; i < s.length; i++) {
        
       if (s[i] === '(') {
           maxCnt = Math.max(maxCnt, ++cnt);
       } else if (s[i] === ')') {
           cnt--;
       }
   } 
   return maxCnt;
};