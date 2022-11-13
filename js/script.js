const allVids = document.querySelector('.userVideos')
fetch('../html/allvideos.html')
.then(res=>res.text())
.then(data=>{
    allVids.innerHTML=data
})