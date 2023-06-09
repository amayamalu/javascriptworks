fetch(`https://v6.exchangerate-api.com/v6/ee19ffdc693866437039d3f5/latest/USD`).
    then(res => res.json()).then(data => processData(data))

 var fromBox=document.querySelector("#from_currency")
 var toBox=document.querySelector("#to_currency")



function processData(data) {
    let currencyCodes = data.conversion_rates
   

    for(let code in currencyCodes){
        let opt=document.createElement("option")
        opt.text=code
        opt.value=data.conversion_rates[code]
        fromBox.appendChild(opt)
        
       
    }
    
    for(let code in currencyCodes){
        let opt=document.createElement("option")
        opt.text=code
        opt.value=data.conversion_rates[code]
        toBox.appendChild(opt)

       
    }
}

function exchangeData(){
    let fromRate=fromBox.value
    let toRate=toBox.value
    let amount=id_amount.value

    let rate=((amount/fromRate)*toRate).toFixed(2)

    document.querySelector("#id_result").innerHTML=rate
}

function displayFromCountryName(event){
    let currencyCode=event.options[event.selectedIndex].text
    console.log(currencyCode);

    fetch(`https://restcountries.com/v2/all/`).then(res=>res.json()).then(data=>{
        for(let c of data){
            if(c.currencies){
                if(c.currencies[0].code==currencyCode){
                    let cname=c.name
                    document.querySelector("#from_countryname").innerHTML=cname
                    document.querySelector("#to_countryname").innerHTML=cname

                }
            }
        }
    })


}


function displayToCountryName(event){
    let currencyCode=event.options[event.selectedIndex].text
    console.log(currencyCode);

    fetch(`https://restcountries.com/v2/all/`).then(res=>res.json()).then(data=>{
        for(let c of data){
            if(c.currencies){
                if(c.currencies[0].code==currencyCode){
                    let cname=c.name
                    document.querySelector("#to_countryname").innerHTML=cname

                }
            }
        }
    })


}