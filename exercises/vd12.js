class Student{
    
     scores={math:this.math,physical:this.physical,chemistry:this.chemistry};
    
    constructor(ID, firstName,lastName,math,physical,chemistry) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.math=math;
        this.physical=physical;
        this.chemistry=chemistry;
    }
    get averageScore(){
        f
        
    }
    get studentTitle(){

        if(this.averageScore<5){
            return 'Bad Student';
        }
        if((5<=this.averageScore && this.averageScore<6.5) && (scores.math>3.5 && scores.chemistry>3.5 && scores.physical>3.5) ){
            return 'Avrage Student';
        }
        if((6.5<=this.averageScore && this.averageScore<8) && (scores.math>5 && scores.chemistry>5 && scores.physical>5) ){
            return 'Good Student';
        }
        if(this.averageScore>=8 && (scores.math>6.5 && scores.chemistry>6.5 && scores.physical>6.5) ){
            return 'Excellent';
        }
        
}
    static  bestStudents(){
        
    }
}
let s1=new Student(1,'aa','aa',10,9.75,6.5);
console.log(s1.averageScore);
console.log(s1.studentTitle)