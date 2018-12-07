let dog={
    name:"mang",
    sayHi:function(){
        console.log('Hi,my name is ',this.name);
    }
}
dog.sayHi();
let cat={
    name:"meow meow"
}
var say=dog.sayHi.bind(cat);
say();