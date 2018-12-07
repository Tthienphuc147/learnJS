function marvel(name){
    this.name=name;
}
marvel.prototype.sayHi=function(){
    console.log(`My name is ${this.name}`);
    
}
let ironMan=new marvel("Iron Man");
ironMan.sayHi();

class marvel1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHello(){
        console.log(`My name is ${this.name} and I'm ${this.age} years old`);
    }

}
deadPool=new marvel1("Dead Pool",35);
deadPool.sayHello();