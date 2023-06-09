/*LOOPS

1.for loop
2.while loop
3.do while loop

1.FOR LOOP
-----------
for(initialization;condition;increment)
{
    stmts to be executed;
}

*/

//forward
// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }

//backward
// for(let i=10;i>=0;i--)
// {
//     console.log(i);
// }


/* 1....WAP to display the grade according to the following
below 25 --D
25-45 --C
45-50 --B
50-60 --B+
60-80 --A
80-100 --A+

2..WAP to display 
sal=10000
year of expeerience >10 sal increment by 10%
                    >=6 <=10  increment by 8%
                    <6       by 5%

3...WAP to print all the ODD AND EVEN  numbers within a given range */

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 1) {                     
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
// }


/* WAP to print the sum of digits of a given number 123 => 1+2+3 */

// let sum=0;
// let num=123
// for(let i=0;num>0;i++){
//     rem=num%10
//     sum=sum+rem
//     // num=parseInt(num/10)
//     // num=((num/10) | 0)
//     num=Math.floor(num/10)
// }
// console.log("sum of 123 is",sum );


/* NESTED FOR ------
for(initialization;condition;increment){
    for(initialization;condition;increment){
       -----stmts to be executed----
    }
}
*/

/* QUESTION----1

*
* *
* * *         */
// let string;
// for (let i = 1; i <=3; i++) {
//     string = ""
//     for (let j = 0; j < i; j++) {
//         // console.log("* ");
//         string += "* "
//     }
//     console.log(string);

// }

/* WHILE LOOP----

while(condition){
    stmts to be executed;
    increment;

}   */

/*1....WAP to print  1 to 10 Numberss  */
 
// let num=1;
// while(num<=10){
//     console.log(num);
//     num++;
// }

//2......WAP to print 10 to 1
// let num=10;
// while(num>0){
//     console.log(num);
//     num--;
// }

//3...Sum of digits
// let num=105
// let sum=0
// while(num>0){
//     rem=num%10;
//     sum=sum+rem;
//     num=parseInt(num/10)

// }
// console.log("sum of digits",sum);

//4....Prime or Not
let num=5;
let flag=0;
for(i=2;i<=num/2;i++){
    if(num%i===0){
        
        flag=1;

    }
}
if(flag===1){
    console.log("not prime");
}
else{
    console.log("prime");
}































/* DO WHILE -------

do{
    stmts;
}while(condition);

*/

// let a=12
// let b=20
// let i=2 
// do{
//     console.log(a+b);
//     i--;

// }while(i>0)
