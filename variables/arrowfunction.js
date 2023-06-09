var addition=(num1,num2)=>num1+num2
console.log(addition(10,20));

var sub=(n1,n2)=>n1-n2
console.log(sub(10,2));

var division=(n1,n2)=>n1/n2
console.log(division(20,10));


///arrow function--ternary operator

var maxTwo=(n1,n2)=>n1>n2?n1:n2

var smartSub=(n1,n2)=>n1>n2?n1-n2:n2-n1

console.log("Max is",maxTwo(10,20));
console.log(smartSub(50,100));

//negative
var n=0
console.log(n>0?"positive":n<0?"negative":"zero");

var n1=10
var n2=10
console.log(n1>n2?n1:n2>n1?n2:"equal");

var n1=20
var n2=30
var n3=10
console.log((n1>n2)&&(n1>n3)?n1:n2>n3?n2:n3);