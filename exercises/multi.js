var a = []; 
a.unshift(1); 
a.unshift(22);
a.shift(); 
a.unshift(3,[4,5]); 
a.shift(); 
a.shift();
a.shift();
console.log(a.unshift(3));
