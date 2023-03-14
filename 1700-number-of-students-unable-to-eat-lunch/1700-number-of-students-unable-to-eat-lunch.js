var countStudents = function(students, sandwiches) {
    
    let count=0;
	
    while (count < students.length && students.length > 0) {
        
        // 만약, 학생들이 샌드위치를 먹고 떠난다면,
        if (students[0] == sandwiches[0]) {
            count = 0;
			students.shift(); 
            sandwiches.shift();
            
        // 만약, 학생들이 샌드위치를 먹지 않고 다시 뒤로 가서 줄을 서야 하면,
        } else {
            count++;
			students.push(students.shift());
        }
    }
    return students.length;
};