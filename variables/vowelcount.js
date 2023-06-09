//QUESTION----No of consonents---No of vowels
var vowels=['a','e','i','o','u']
var text="hello"
var vowel_count=0
var cons_count=0

for(let ch of text){
    // if(vowels.includes(ch)){
    //     vowel_count+=1
    // }
    // else{
    //     cons_count+=1
    // }

    vowels.includes(ch)?vowel_count+=1:cons_count+=1
}
console.log(vowel_count);
console.log(cons_count);