var findRelativeRanks = function(score) {
    let sortArr = score.slice();
  
    sortArr.sort( (a,b) => (b-a));
    
    let result = [];
    
    for (let i = 0; i < score.length; i++) {
        let j = sortArr.indexOf(score[i]);
        
        if (j === 0) {
            result.push("Gold Medal");
        } else if(j === 1) {
            result.push("Silver Medal");
        } else if(j === 2) {
            result.push("Bronze Medal");
        } else {
            result.push((j + 1).toString());
        }
    }
    return result;
};