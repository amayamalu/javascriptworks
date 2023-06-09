/*IF CONDITION */


// // 1. num1 > num2 print "hai" , num1<num2 print "hello" using if condition

// var num1=10
// var num2=20
// if(num1>num2)
// {
//     console.log('hai');
// }
// if(num1<num2)
// {
//     console.log('hello');
// }

// // 2. write a program to print whether the given number is +ve,-ve or zero using if only

// var num1=-67
// if(num1>0)
// {
//     console.log('positive');
// }
// if(num1<0)
// {
//     console.log('negative');
// }
// if(num1==0)
// {
//     console.log('zero');
// }

// // 3. write a program to check whether a student passed or failed in a exam.passed if marks 45 and above,if below 45 failed

// mark1=95
// if(mark1>=45)
// {
//     console.log('passed');
// }
// if(mark1<45)
// {
//     console.log('failed');
// }

// // 4. write a program to check a person is eligible for voting or not

// age=20
// if(age>=18)
// {
//     console.log('aligible to vote');
// }
// if(age<18)
// {
//     console.log('not aligible to voting');
// }

// // 5. check the given number is odd or even

// var num1=67
// if(num1%2==0)
// {
//     console.log('even');
// }
// if(num1%2!=0)
// {
//     console.log('odd');
// }
// if(num1===0)
// {
//     console.log('zero');
// }

// // 6. check the given number is divisible by 7 or not

// num2=49
// if(num2%7==0)
// {
//     console.log('divisible by 7')

// }
// if(num2%7!=0)
// {
//     console.log('not divisible by 7');
// }


// /*IF ELSE CONDITION */

// var a=10
// var b=15
// if(a>b)
// {
//     console.log("hi");
//     console.log("a is greater");
//     //{}--when more than one line of code to be executed
// }
// else
//     console.log("hello");


//WAP to print given number is odd or even//

// var num=10
// if(num%2===0)
//     console.log("num is even");
// else
//     console.log("num is odd");

// //WAP to find maximum of 3 numbers 

// let num1=10000
// let num2=50
// let num3=1500
// let max;

// if(num1>num2)
//    max=num1

// if(num1<=num2)
//    max=num2

// if (num3>max)
//    max=num3

// console.log(max);

// /* TERNARY OPERATORS */
// /*condition ? stmt1:stmt */

// num1=25
// num2=10
// num1>num2 ? console.log(num1):console.log(num2);

// num1>num2 ? (num1>20 ? console.log("stmt1"):console.log("stmt2")):console.log(num2);;


// /* IF ELSE IF CONDITION */

// num1=408
// num2=200
// num3=2

// if(num1>num2 && num1>num3){
//     console.log(num1);
// }
// else if(num2>num3)
//     console.log(num2);
// else
//    console.log(num3);


// let a=15
// if(a===10)
// console.log("a is",a);
// else if(a===15)
// console.log("a is",a);
// else if(a===30)
// console.log("a is",a);
// else
// console.log("a is not ,10,15,30");


//wap to check whether the given angle of a triangle is valid or not

a=5
b=11
c=8
if(a+b>c && b+c>a && a+c>b){
    console.log("valid");
}
else{
    console.log("not valid");
}


//valid traingle check whether it is isocsles
a=20
b=40
c=40
if (a===b || b===c || a===c){
    console.log("it is an isocsles triangle");
}
else
    console.log("not isocsles triangle");


