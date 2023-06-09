/*Functions
-------------
function functionName(arg1,arg2....){
    stmnts;
}
function Name(args1,args2)

*/

// function hello(){
//     console.log("hello");
// }
// hello();



// function sum(a,b){
//     return a+b;

// }
// console.log(sum(2,3));


//factorial

// function fact(){
//     let num=5;
//     let fa=1
//     for(i=1;i<=num;i++)
//         fa*=i
//     console.log("factorial:",+fa);
// }
// fact();



//area of triangles
/*
function equilat(side){
    let area=((Math.sqrt(3))/4 )*(side*side)
    console.log("area="+area);
}

function isocs(b,h){
    let area=(b*h)/2
    console.log("area="+area);
}

function scalene(a,b,c){
    let s=a+b+c
    let area =Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log("area="+area);
}

let side1=10;
let side2=11;
let side3=12;
if(side1===side2 && side2===side3 ){
    console.log("triangle is equilateral");
    equilat(side1);
}
else if(side1===side2 || side2===side3 || side1===side3){
    console.log("triangle is isocles");
    isocs(side1,side2);
}
else{
    console.log("triangle is scalene");
    scalene(side1,side2,side3);
}


/////
/*Functions
-------------
function functionName(arg1,arg2....){
    stmnts;
}
function Name(args1,args2)

*/
/*
function hello(){
    console.log("hello");
}
hello();



function sum(a,b){
    return a+b;

}
console.log(sum(2,3));


//factorial

function fact(){
    let num=5;
    let fa=1
    for(i=1;i<=num;i++)
        fa*=i
    console.log("factorial:",+fa);
}
fact();



//area of triangles
function equilat(side){
    let area=((Math.sqrt(3))/4 )*(side*side)
    console.log("area="+area);
}

function isocs(b,h){
    let area=(b*h)/2
    console.log("area="+area);
}

function scalene(a,b,c){
    let s=a+b+c
    let area =Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log("area="+area);
}

let side1=10;
let side2=11;
let side3=12;
if(side1===side2 && side2===side3 ){
    console.log("triangle is equilateral");
    equilat(side1);
}
else if(side1===side2 || side2===side3 || side1===side3){
    console.log("triangle is isocles");
    isocs(side1,side2);
}
else{
    console.log("triangle is scalene");
    scalene(side1,side2,side3);
}

*/


/*LEAP YEAR */

// function leapyear(year) {
//     if (year % 4 === 0) {
//         if (year % 400 === 0 || year % 100 !== 0){
//             console.log("leap year");

//         }
//     }
//     else {
//         console.log("not leap year");
//     }



// }
// leapyear(2020);
// leapyear(2018);



// 4.degree celcius to farenheet

function degreetofarehn(degree){
    let f=degree*9/5+32
    console.log(f);
}
degreetofarehn(24)

// 5. farenheat to celcious

function farehntodegree(faren){
    let c=[(faren-32)*5]/9
    console.log(c);
}
farehntodegree(60)