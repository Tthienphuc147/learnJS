/*
primitive types:Boolean, null, undefined, String, và Number.
reference types:Array, Function, và Object. 
 */
//Khi một giá trị là một kiểu dữ liệu thuộc dạng primitive được gán cho một biến tức là lúc này biến đó chứa giá trị đó.
let a=5;
let b=7;
console.log(a===b);
let c=a;
let d=b;
console.log(c+","+d);
console.log(c===d);
//Khi ta thay đổi giá trị một biến sẽ không làm thay đổi biến khác. Tức là giữa hai biến không còn quan hệ vợi nhau nữa.
// c=1;
// d=2;
// console.log(a+","+b);
// console.log(c+","+d);
/*
Khi một biến được gán một giá trị thuộc kiểu dữ liệu thuộc nhóm Reference thì biến đó chỉ lưu địa chỉ của giá trị đó trên bộ nhớ. 
Biến đó không lưu giá trị được gán. 
*/
// let obj1 = { first: 'reference' };
// let obj2 = { first: 'reference' };
// console.log(obj1);
// obj1={second:"reference1"};// biến obj sẽ được chứa địa chỉ khác khi gán cho nó một địa object khác.
// console.log(obj1);
// console.log(obj1===obj2);
// let obj3=obj2;
// obj3.first="reference3";
// console.log(obj2);//thật chất obj2 và obj3 cùng tham chiếu tới một object nào đó vì đó nếu như obj3 thay đổi giá trị thì giá trị tham chiếu của obj2 và obj3 của cùng 1 object nào đó cũng thay đổi do đó obj2 cũng thay đổi giá trị