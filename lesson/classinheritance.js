class person{
    constructor(name,age,sex){
        this.name=name;
        this.age=age;
        this.sex=sex;
    }
    sayHi(){
        console.log(`My name is ${this.name} and  I'm ${this.age} years old`)
    }
}
class employee extends person{
    
    job(nameCompany){
        console.log(`${this.name} is working at ${nameCompany} company.`)
    }
}
e1=new employee("Teo",25,"male");
e1.job("GameLoft");