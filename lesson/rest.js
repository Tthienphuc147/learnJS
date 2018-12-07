// function say(name,...names){//rest là phần còn lại...ghi ở cuối cùng trong tham số truyền vào
//     console.log(name);
//     console.log(names);
    
// }
// function say1(...names){//khác giữa rest và arguments là rest nó sẽ xuất 1 cái mảng,còn arguments nó sẽ xuất ra một array like object
//     console.log(arguments)
// }

// say("Tèo","Tý","Ty","Út");
// say1("Tèo","Tý","Ty","Út");
function sum(...nums){
    return nums.reduce((a,b)=>a+b,0);//ở cách dùng rest thì chúng ta không cần sử dùng đến Array.from để biến đối arguments về thành 1 cái mảng để sủ dụng đk method có trong array
}
function sum1(){
    return Array.from(arguments).reduce((a,b)=>a+b,0);
}
// console.log(sum(1,2,3,4,5));
// console.log(sum1(1,2,3,4,5));

function concat(seperator,...strings){
    return strings.join(seperator);
}
console.log(concat(";","tôi","tên","là Phúc."));
