//spread an array
const a=[2,4,6];
const b=[1,2,3,...a,8,9];
console.log(b);
//spread an object
const obj1={
    name:"teo",
    age:50
}
// let obj2=obj1; //nếu clone như cách này thì khi ta thay đổi giá trị của 1 thuộc tính obj2 thì obj1 cũng ảnh hưởng vì cả 2 cùng tham chiều đến 1 obj nào đó.
// obj2.age=56
// console.log(obj1);
// console.log(obj2);
//do vậy dùng spread để clone obj2 như obj1 tuy nhiên khi mình thay đổi giá trị của 1 thuộc tính nào đó obj2 thì ko ảnh hưởng obj.Vì bây h obj2 đã tham chiếu đến 1 obj khác obj mà obj1 tham chiếu.
obj2={
    ...obj1
}
obj2.age=57;
console.log(obj1);
console.log(obj2);
/*
 It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().
*/