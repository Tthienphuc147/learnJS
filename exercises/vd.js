let students=[
     {
      name:'phuc',
      birthday:{day:14,month:7,year:1998},
      age:20,
      sex:'male',
      mathPoint:9,
      physicPoint:8,
      chemistryPoint:9.5,
      average:0
  },
  {
    name:'pi',
    birthday:{day:04,month:9,year:1996},
    age:22,
    sex:'male',
    mathPoint:10,
    physicPoint:10,
    chemistryPoint:10,
    average:0
},
{
    name:'hanh',
    birthday:{day:05,month:11,year:1998},
    age:25,
    sex:'female',
    mathPoint:10,
    physicPoint:9.5,
    chemistryPoint:10,
    average:0
}
];

    for(let i=0;i<students.length;i++){
        if(students[i].sex=='male'){
            console.log(students[i]);
        }
    }
// for(let i=0;i<students.length;i++){
//     let max=students[0].age;
//     if(students[i].age>max){
//         console.log(students[i].name);
        
//     }
// }
// function average(){
//     for(let i=0;i<students.length;i++){
//        students[i].average=Math.floor((students[i].mathPoint+students[i].physicPoint+students[i].chemistryPoint)/3);
// }
// }
// average();

// for(let i=0;i<students.length;i++){

// }
