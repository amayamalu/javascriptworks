//---promises---

// var promiseSession=new Promise((res,rej)=>{
//     let avgWatchTime=2
//     if(avgWatchTime>1){
//         res("completed")
//     }
// })

// promiseSession.then(res=>console.log("lets start fetch")).catch(err=>console.log("watch again"))



// var promiseStudy=new Promise((res,rej)=>{
//     let studyTime=4
//     if(studyTime>3){
//         res("completed")
//     }

// })
// promiseStudy.then(res=>console.log("you will get a job")).catch(err=>console.log("studyy"))




var luckyContext=new Promise((res,rej)=>{
    let yourNum=6
    let lotNum=parseInt(Math.random()*10)
    if(yourNum==lotNum){
        res("you win")
    }

})
luckyContext.then(res=>console.log("will by a new car"))