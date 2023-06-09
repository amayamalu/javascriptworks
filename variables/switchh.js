/*
switch  (expression)
    case condition1:
         stmts
    case condition2:
         stmts
    case condition3
         stmts
    default:
         stmt

*/

// check whether given value is 10,15,20 print value is not 10.15,20

// let num=50;
// switch (num){
// case 10:
//     console.log("value is 10");
//     break;
// case 15:
//     console.log("value is 15");
//     break;
// case 20:
//     console.log("vlaue is 20");
//     break;
// default:
//     console.log("the value is not 10,15, 20");
// }

//print day for particular number ex: day=1 .frst day is sunday'

// let day=9;
// switch(day)
// {
//     case 1:
//          console.log("frst day is sunday");
//          break

//     case 2:
//          console.log("scnd day is monday");
//          break
//     case 3:
//         console.log("third day is tuesday");
//         break
//     case 4:
//         console.log("wednesday");
//         break
//     case 5:
//         console.log("thursday");
//         break
//     case 6:
//         console.log("friday");
//         break
//     case 7:
//         console.log("saturday");
//         break
//     default:
//         console.log("invalid");

    
// }

//3.Calculator  -add-1,sub-2,mul-3,div-4

let n1=5;
let n2=10;
choice="-"
switch(choice)
{
    case "+":
        console.log("sum is ", n1+n2);
        break
    case "-":
        console.log("sub is ",n1-n2);
        break
    case "*":
        console.log("multi is ",n1*n2);
        break
    case "/":
        console.log("div is ",n1/n2);
        break
    default:
        console.log("invalid");
}