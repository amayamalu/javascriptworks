fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=2ed6375f76194fba939ba6339213f0a8`).
then(res=>res.json()).then(data=>console.log(data))


// function displayNews(data){
//     let htmlData=""
    
//     for(let a of data.articles){
//         let image=articles.urlToImage;
//         let title=articles.title;
//         let content=articles.content
//         let author=articles.author
//         let pdate=articles.publishedAt;
//         let description=articles.description;
//         let source=articles.source.name;
//         let url=articles.url

//     let htmlData=`
//     <div class="container">
//         <div class="row mt-4" id="result" >
//             <div class="col-4">
//                 <div class="card" style="width: 18rem;">
//                     <img src="${image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${title}</h5>
//                       <p class="card-text">${content}</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                       <li class="list-group-item">An item</li>
//                       <li class="list-group-item">A second item</li>
//                       <li class="list-group-item">A third item</li>
//                     </ul>
//                     <div class="card-body">
//                       <a href="#" class="card-link">Card link</a>
//                       <a href="#" class="card-link">Another link</a>
//                     </div>
//                   </div>

//             </div>
//         </div>
//     </div>
    
//         `
//      document.querySelector("#result").innerHTML=htmlData

//     }
   
// }