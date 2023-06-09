/////=====TO ARRAY FORMAT====
//----Array.from()----
//---SPread opertor--[...]

///====OBJECT TO ARRAY=====
//---objects.entries

var temps={"kkd":34,"pkd":37,"tsr":35}
var max_temp=Object.entries(temps).reduce((t1,t2)=>t1[1]>t2[1]?t1:t2)
console.log(max_temp);