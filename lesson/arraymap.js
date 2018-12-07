/*
Phương thức map()(ánh xạ) giúp tạo ra một mảng mới với các phần tử là kết quả từ việc thực thi một hàm lên từng phần tử của mảng được gọi.
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Trả về element mới cho new_array
}[, thisArg])

*/

let rectangles=[
    {width:10,height:5},
    {width:10,height:20},
    {width:4,height:16},
];
let rectanglesArea=rectangles.map(item=>item.width*item.height);
console.log(rectanglesArea);
let persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
    let fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
}
console.log(persons.map(getFullName));
let personNew=persons.map(item=>[item.firstname,item.lastname].join(''));
let nums=[1,2,3,4,5];
let num1=nums.map(item=>item*item);
console.log(num1);

let square=[{canh: 4},{canh: 3},{canh: 2}];
let sa= square.map(item=>item.canh*item.canh);
console.log(sa);



