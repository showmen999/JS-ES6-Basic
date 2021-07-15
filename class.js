class Student{
    constructor(sId,sName,sDept,sBatch)
    {
        this.id = sId;
        this.name = sName;
        this.dept = sDept;
        this.batch = sBatch;
        this.uni = 'Metropolitan University';
    }
}

const student1 = new Student(81,'Showmen Purkayasta','CSE',"41'st");
const student2 = new Student(11,'Avishek Deb','ENG',"42'nd");
const student3 = new Student(15,'Radhika','ENG',"42'nd");
student3.uni = 'Moulovibazer Govt. College';

student2.batch = `44'th`; 

console.log(student1,student2);
console.log(student3);