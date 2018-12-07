const a=[1,2,3];
const b=[6,7,8,...a,9,10];//spread sẽ trải 1 array ra thành các phần từ,,khác biệt với rest là gom các phần từ thành 1 array
const c=[6,7,8,a,9,10];
console.log(b);
console.log(c);
function plus(...nums){
    return nums.reduce((a,b)=>a*b,1);
}
console.log(plus(...a));
console.log(plus(3,4,5));