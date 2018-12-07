/*
Phương thức reduce() dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến lũy kế để thu về một giá trị duy nhất.
arr.reduce(callback[, initialValue])
*/
let nums=[2,4,5,6,8,12];
let sum=nums.reduce((item1,item2)=>item1+item2);
console.log(sum);
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);

let orders=[
    {name:"A",quantity:2,unitPrice:100},
    {name:"B",quantity:1,unitPrice:400},
    {name:"C",quantity:5,unitPrice:150}
];
let total = orders.reduce(function(sum, item){
    return sum+item.quantity*item.unitPrice;
    
},0);
console.log(total);
