function numCheck(){
    let num=+id_tbox1.value;
    if(num%2==0){
        document.querySelector("#id_result").innerHTML=`<h2 style="color:red"> ${num} is even </h2> `
        

    }
    else{
        document.querySelector("#id_result").innerHTML=`<h2 style="color:green"> ${num} is odd</h2> `


    }


}