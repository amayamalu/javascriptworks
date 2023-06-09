var products=[
    {code:1,name:"potatto",price:45,avl_qty:50,category:"veg"},
    {code:2,name:"onion",price:30,avl_qty:150,category:"veg"},
    {code:3,name:"brinjal",price:30,avl_qty:10,category:"veg"},
    {code:4,name:"carrot",price:75,avl_qty:0,category:"veg"},
    {code:5,name:"tomatto",price:34,avl_qty:20,category:"veg"},
    {code:6,name:"apple",price:190,avl_qty:50,category:"veg"},
    {code:7,name:"egg",price:5,avl_qty:250,category:"nonveg"},
    {code:8,name:"chicken",price:145,avl_qty:250,category:"nonveg"},
    {code:9,name:"garlic",price:240,avl_qty:0,category:"veg"},
    {code:10,name:"chilly",price:100,avl_qty:15,category:"veg"},
]


////-----foreach()----

products.forEach(p=>console.log(p.name))
products.forEach(p=>console.log(p.price))



//Q1---Total number of items---
// console.log(products.length);

//Q2---Total number of  available items
var available_product=products.filter(p=>p.avl_qty>0).length
// console.log(available_product);

//Q3---Out of stock prouct names---
var outofstock=products.filter(p=>p.avl_qty==0).map(p=>p.name)
// console.log(outofstock);

//Q4---In stock product names---
var instock=products.filter(p=>p.avl_qty>0).map(p=>p.name)
// console.log(instock);

//Q5---Is there any products available under rs 40

var available=products.some(p=>p.price<="40")
// console.log(available);

//Q6---Costly product---
var costly=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).name
// console.log(costly);

//Q7---print apple product price---
var apple=products.find(p=>p.name=="apple").price
// console.log(apple);



