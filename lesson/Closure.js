function eat(food){
 return function p(name){
     console.log(`${name} is eating ${food}`);
 }
}
const a=eat("Chicken");
a("Kai");