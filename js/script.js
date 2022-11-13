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
for (var i=0; i < limit; i++) {
  
    $('
    
    .dynCards').append(newCard);
    
    // check index is counting correctly
    console.log(i);
    
  }