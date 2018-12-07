class Animal{
    move(){
        console.log("Animals can move");  
    }
}
class Dog extends Animal{
    move(bark){
        console.log("Dogs can walk and run");
        bark();
    }
}
let lu=new Dog();
lu.move(function bark(){
    console.log("Gauw Gauw");
});