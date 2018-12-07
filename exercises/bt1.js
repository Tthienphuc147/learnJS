let bill = 
    [
        {   
            ID: 1,
            content:[{productID: 325, amount: 2},{productID: 612, amount: 6},{productID: 123, amount: 10}],
            totalPrice: 0
        },
        {   
            ID: 2,
            content:[{productID: 601, amount: 1},{productID: 123, amount: 2},{productID: 325, amount: 3}],
            totalPrice: 0
        },
    ]

 let product = [
     {
         ID: 123,
         name: "The New iPad 2018",
         price: 799,
         brand: "Apple",
         classify: "Tablet"
     },
     {
         ID: 325,
         name: "Mi Mix 3",
         price: 499,
         brand: "Xiaomi",
         classify: "Smartphone"
     },
     {
         ID: 612,
         name: "Alienware 17R5",
         price: 1549,
         brand: "Dell",
         classify: "Laptop"
     },
     {
         ID: 601,
         name: "Macbook Pro 2018",
         price: 1299,
         brand: "Apple",
         classify: "Laptop"
     }
   
 ]
// 1. Write function calculate bill total price. Then update the data.
console.log("Calculate bill total price. \n");
function getPriceProduct(productID){
   for(let i=0;i<product.length;i++){
       if(product[i].ID===productID){
           return product[i].price;
       }
   }
}
function getBill(){
    for(let i=0;i<bill.length;i++){
            for(let j=0;j<bill[i].content.length;j++){
               bill[i].totalPrice+=getPriceProduct(bill[i].content[j].productID)*bill[i].content[j].amount;
            }    
    }
    for(let i=0;i<bill.length;i++){
        console.log(bill[i]);
        
    }
}
getBill();
//2. Write function have "brand" is a parameter and return product belong that brand. Example: findBrand("Aplle") -> return product[1] & product[4]
console.log("\nFind Apple Brand.\n");
function findBrand(brand){
  for(let i=0;i<product.length;i++){
      if(product[i].brand===brand){
         console.log(product[i]);
      }
  }
 }
 findBrand("Apple");

// Write function display all data of the bill.
// Example: displayBill(bill[1]) -> log
// "1. Xiaomi Mi Mix 3 x2: 998 USD
//  2. Dell Alienware 17R5 x6: 9294 USD
//  3. Apple The New iPad 2018 x10: 7990 USD
//        Total Price: 18282 USD"
function getProductName(productID){
    for(let i=0;i<product.length;i++){
        if(product[i].ID===productID){
            return product[i].brand+" "+product[i].name;
        }
    }
};
function displayBill(a){
    for(let i=0;i<bill.length;i++){
        if(bill[i].ID==a){
            for(let j=0;j<bill[i].content.length;j++){
                let total=getPriceProduct(bill[i].content[j].productID)*bill[i].content[j].amount;
                console.log(`${j+1}.  ${getProductName(bill[i].content[j].productID)} x${bill[i].content[j].amount}:${total} USD `)

                
            }
            console.log(`      Total Price:${bill[i].totalPrice} USD`);
        }
    }
};
console.log("\nDisplay bill 1\n");


