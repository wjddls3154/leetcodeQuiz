// 주어진 문자열에서 첫 번째로 유일한 문자의 index를 찾아 반환하는 문제
let firstUniqChar = (s) => {
    
    let duplicateMap = new Map();
    let onlyOneMap = new Map();

    s.split('').forEach( (char, idx) => {
        if ( onlyOneMap.has(char) ) {
            duplicateMap.set(char, idx);
            onlyOneMap.delete(char);
        } 
        
        else if (duplicateMap.has(char)) {
            onlyOneMap.delete(char);
        }
        
        else onlyOneMap.set(char, idx);
    })

    if (!onlyOneMap.size) return -1;
    return onlyOneMap.values().next().value;
};