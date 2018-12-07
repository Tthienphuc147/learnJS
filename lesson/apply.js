function sum(){
    const num=Array.from(arguments);
    return num.reduce((sum,x)=>sum+x,0);
}
console.log(sum(1,3,5,7));

function average(){
    const ave=sum.apply(null,arguments);
    return ave/arguments.length;
}
console.log(average(1,3,5,7));

