class person{
    constructor(name,age,sex){
        this.name=name;
        this.age=age;
        this.sex=sex;
    }
    sayHi(){
        console.log(`My name is ${this.name} and  I'm ${this.age} years old`)
    }
};
class employee extends person{
    constructor(name,age,sex,level){
        super(name,age,sex);
        this.level=level;
    }
    job(nameCompany){
        super.sayHi();
        console.log(`${this.name} is working at ${nameCompany}.`)
    }
};
const e1=new employee("Hazard",28,"male","Super Star");
e1.job("Chelsea Football Club");
