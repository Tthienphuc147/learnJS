// const myCat=["lulu","tomtom","mimi"];
// for(let i=0;i<myCat.length;i++){
//     console.log(myCat[i]);
// }
// const obj={
//     0:"lulu",
//     1:"tomtom",
//     2:"mimi",
//     length:3
// }
// for(let i=0;i<obj.length;i++){
//     console.log(obj[i]);
// }

function sum(){
    let result=0;
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}
function sum1(){
   const nums=Array.from(arguments);
   return nums.reduce((item1,item2)=>item1+item2,0);
}
console.log(sum(1,2,3,4,5));
console.log(sum1(1,2,3,4,10,20));