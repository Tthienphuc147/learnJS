class Human {
    constructor() {}
    static ping() {
        return 'ping';
    }
    get age(){
        console.log("aaa");
    }
}
class Computer extends Human {
    constructor() {}
    get age(){
        console.log("bbbbbbb");
    }
}
let h=new Human();
h.age
