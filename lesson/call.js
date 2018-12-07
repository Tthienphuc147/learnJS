function makeCoffee(nameCoffee){
    console.log(`Let's make ${nameCoffee} ! coffee`);
}
makeCoffee("Capuchino");
makeCoffee.call(null,"Latte");

function hobby(name){
    console.log(`${name} like ${this.color} ${this.name}`);
};
const cat={
    name:"meow",
    color:"black"
};
hobby.call(cat,"Ua");