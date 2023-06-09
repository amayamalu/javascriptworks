var text="hello good morning all"

var length=text.split(" ").reduce((c1,c2)=>c1.length>c2.length?c1:c2)
console.log(length);