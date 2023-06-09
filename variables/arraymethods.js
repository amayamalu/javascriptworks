// // pop
// // Push
// // includes

// var arr=[10,20,30]
// //add object into array
// arr.push(100)
// console.log(arr);
// //remove last item in array
// arr.pop()
// console.log(arr);
// //to check an object in array
// console.log(arr.includes(10));

///----ARRAY METHODS-----//----MAP---REDUCE--FILTER---SORT---SOME---

// var nums=[2,4,6,8,10]

// var cubes=nums.map((n)=>n**3)
// console.log(cubes);

// var square=nums.map((n)=>n**2)
// console.log(square);


// var nums=[2,3,4,5,6,7,8,10]

// var even=nums.filter(n=> n%2==0)
// console.log(even);

// var gt_five=nums.filter(n=> n>5)
// console.log(gt_five);


//--Print all names in uppercase---

// var names=["albin","anu","alka","aju","binu"]

// var upper_name=names.map(name =>name.toUpperCase())
// console.log(upper_name);

// //--Print all names start with "a"---

// var start_a=names.filter(name =>name[0]=='a')
// // var start_a=names.filter(name =>name.startsWith('a'))

// console.log(start_a);


// var numbers=[4,9,14,20,80]

// var div=numbers.filter(num =>num%3==0)
// console.log(div);

// var re=numbers.map(num =>num**2)
// console.log(re);



// //---SORT---
// var nums=[2,10,3,4,5,100,200]
// // var srt=nums.sort((o1,o2) =>o1-o2)
// var srt=nums.sort((o1,o2) => o1<o2?-1:1)   //ascending 
// console.log(srt);


// //--REDUCE--
// var sum=nums.reduceRight((n1,n2)=>n1+n2)
// console.log(sum);

// var max=nums.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

// var  min=nums.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);


var expense=[12000,8000,24000,23000,450000,100000]

// total expense reduce
// highest exp reduce
// lowest exp reduce
// avg exp reduce /len
// sort exp //sort
// expeses > 20000 //filter

var total=expense.reduce((n1,n2)=>n1+n2)
console.log(total);

var highest=expense.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);

var lowest=expense.reduce((n1,n2)=>n1>n2?n2:n1)
console.log(lowest);

var avg=total/(expense.length)
console.log(avg);

var srt=expense.sort((n1,n2)=>n1<n2?-1:1)
console.log(srt);

var gt_twenty=expense.filter(num=>num>20000)
console.log(gt_twenty);
