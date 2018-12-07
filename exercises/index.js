let personnel = [
    {
        ID: 3123,
        fullName: "Phan Van Teo",
        email: "teo_em@gmail.com",
        birthday: {day: 12, month: 3, year: 1980},
        age: 0,
        gender: "male",
        nativeLand: "Quang Nam Provice",
        position: "manager",
        salary: 0,
        seniority: 31
    },
    {
        ID: 3112,
        fullName: "Ban Thi No",
        email: "thi_no@gmail.com",
        birthday: {day: 4, month: 4, year: 1987},
        age: 0,
        gender: "female",
        nativeLand: "Ha Tinh Provice",
        position: "secterary",
        salary: 0,
        seniority: 20
    },
    {
        ID: 3376,
        fullName: "Ton That Hoc",
        email: "that.hoc@gmail.com",
        birthday: {day: 12, month: 3, year: 1998},
        age: 0,
        gender: "male",
        nativeLand: "Da Nang City",
        position: "employee",
        salary: 0,
        seniority: 9
    },
   
    {
        ID: 3377,
        fullName: "Ton That Nghiep",
        email: "that.nghiep@gmail.com",
        birthday: {day: 29, month: 2, year: 1996},
        age: 0,
        gender: "female",
        nativeLand: "Da Nang City",
        position: "employee",
        salary: 0,
        seniority: 50
    }
]
function tinhhsalary(){
    for(let i=0;i<personnel.length;i++){  
        if(personnel[i].seniority<12 ){
            if(personnel[i].position=="manager"){
                personnel[i].salary=1000*1.2;
            }
            else if(personnel[i].position=="secterary"){
                personnel[i].salary=400*1.2;
            }
            else{
                personnel[i].salary=300*1.2;
            } 
        }
        else if(personnel[i].seniority>=12 && personnel[i].seniority<24){
            if(personnel[i].position=="manager"){
                personnel[i].salary=1000*2;
            }
            else if(personnel[i].position=="secterary"){
                personnel[i].salary=400*2;
            }
            else{
                personnel[i].salary=300*2;
            } 
        }
        else if(personnel[i].seniority>=24 && personnel[i].seniority<36){
            if(personnel[i].position=="manager"){
                personnel[i].salary=1000*3.4;
            }
            else if(personnel[i].position=="secterary"){
                personnel[i].salary=400*3.4;
            }
            else{
                personnel[i].salary=300*3.4;
            } 
        }
        else{
            if(personnel[i].position=="manager"){
                personnel[i].salary=1000*4.5;
            }
            else if(personnel[i].position=="secterary"){
                personnel[i].salary=400*4.5;
            }
            else{
                personnel[i].salary=300*4.5;
            } 
        }
    }
    
}
function tinhTuoi(){
    let d=new Date();
    for(let i=0;i<personnel.length;i++){ 
        personnel[i].age=d.getFullYear()-personnel[i].birthday.year;
    }
}
//1
tinhhsalary();
//2


tinhTuoi();

for(let i=0;i<personnel.length;i++){
    console.log(personnel[i]);
}
let emp=[];
for(let i=0;i<personnel.length;i++){
    if(personnel[i].position=="employee" ){
       emp.push(personnel[i]);
    }
}
for(let i=0;i<emp.length;i++){
    let max=emp[0].salary;
    if(emp[i].salary>max){
        max=emp[i].salary;
        console.log("Nhan vien co luong cao nhat la:",emp[i].fullName);
        break;
    }
    
}

//3
function addPerson(ID,fullName,email,d,m,y,age,gender,nativeLand,position,salary,seniority){
    let p={
        ID: ID,
        fullName: fullName,
        email: email,
        birthday: {day: d, month: m, year: y},
        age: age,
        gender: gender,
        nativeLand: nativeLand,
        position: position,
        salary: salary,
        seniority: seniority
    }
    personnel.push(p);

}
addPerson(223,"phan ty","phanty@gmail.com",12,3,1998,20,"male","QN","employee",3400,31);
//4
function searchID(ID){
    for(let i=0;i<personnel.length;i++){
        if(ID==personnel[i].ID){
            console.log(personnel[i]);
            break;
        }
    }

}
searchID(3123);

for(let i=0;i<personnel.length;i++){
    console.log(personnel[i]);
}