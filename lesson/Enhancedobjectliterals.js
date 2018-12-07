//constructor function
function animal(name){
    this.name=name;
}
animal.prototype.sayHi=function(){
    console.log(`My name is ${this.name}`);
}
const dog=new animal("LuLu");
dog.sayHi();
//object literals
const person={
    name:"Eden Hazard",
    age:28,
    position:"LMF",
    infor:function(){
        console.log(`${this.name} is the player in the world`);
    }
}
person.infor(); //Enhanced object literals in ES6
// It provides a shorthand syntax for initializing properties from variables.
// It provides a shorthand syntax for defining function methods.
// It enables the ability to have computed property names in an object literal definition.
const cName="meow meow";
const cat={
    cName,
    eat(food){
        console.log(`${this.cName} is eating ${food}`)
    }

}
cat.eat("bones");