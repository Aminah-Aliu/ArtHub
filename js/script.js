// const collections = INSERT QUERY HERE
const collections = [{"createdAt":"2022-11-12T23:10:35.152469Z","uuid":"35298ebf-0b80-43e2-a808-1d6ed8c45e51","name":"COLLECTION_NAME","description":"COLLECTION_DESCRIPTION","userId":577,"cid":""},
{"createdAt":"2022-11-12T23:10:38.373357Z","uuid":"96b52078-7fba-413c-b984-fbf2d1115e0c","name":"COLLECTION_NAME","description":"v","userId":577,"cid":"","contributors":["test"]},
{"createdAt":"2022-11-12T23:10:38.484493Z","uuid":"0ec07621-c8f1-42d1-b19a-935a09f34f2a","name":"COLLECTION_NAME","description":"vi","userId":577,"cid":""}]

const allVids = document.querySelector('.userVideos')
fetch('../html/allvideos.html')
.then(res=>res.text())
.then(data=>{
    allVids.innerHTML=data
});
// create list of file paths for images
// check syntax to attach code to parent div
// how to append one div to another (append isn't functioning)
// should be able to do  <img src="${pathes[i]}">
newCard = `<div class="col-sm-4">
<div class="card h-100">
  <img src="../images/thumbnails/thumbnail1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">Last updated 3 mins ago</small>
  </div>
</div>
</div>`
var limit = 4;
// var add = ;
const para = document.createElement("p");
const node = document.createTextNode("This is a paragraph.");

para.appendChild(node);
console.log(document.getElementsByClassName("dynCards")[0]);
document.querySelector('#insCards').appendChild(para);

// for (var i=0; i < limit; i++) {
  
//     add.append(newCard);
    
//     // check index is counting correctly
//     console.log(i);
    
//   }

// for (var i=0; i < limit; i++) {
  
//     $('.dynCards').append(newCard);
    
//     // check index is counting correctly
//     console.log(i);
    
//   }