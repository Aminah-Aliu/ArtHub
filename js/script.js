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
