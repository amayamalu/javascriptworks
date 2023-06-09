function degreeFh(){
    let value=+id_deg.value;
    console.log(value);
    res=(value * 9/5) + 32 ;
    // document.querySelector("#id_fh").value=`${res}`
    id_fh.value=res

}

function fhDegree(){
    let value=+id_fh.value;
    res=(value-32) * 5/9;
    // document.querySelector("#id_deg").value=`${res}`
    id_deg.value=res


}