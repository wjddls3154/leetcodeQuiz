// 최저 및 최대 급여는 제외시키고, 나머지 직원들의 평균 급여를 반환하는 문제

let average = function(salary) {
    
    // 최대, 최저 급여 변수에 넣고, splice 이용해서 제거.
    let maxS = Math.max(...salary);
    let minS = Math.min(...salary);
    salary.splice(salary.indexOf(maxS),1);
    salary.splice(salary.indexOf(minS),1);
    
    let sum = 0;  // 최저 최대 급여를 제외한, 나머지 급여의 합
    for(let i of salary){
        sum = sum + i;
    }
    
    // 나머지 급여의 평균을 구해서 반환
    let avg = sum / salary.length;
    return avg;
};