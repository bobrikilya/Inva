
if(navigator.webkitGetUserMedia!=null) { 
    // запрашиваем доступ к веб-камере
    navigator.webkitGetUserMedia({video: true}, getStream, noStream);
};


function getStream(stream){
    let video = document.querySelector('video');
    // video.src = window.webkitURL.createObjectURL(stream);
    video.srcObject = stream;
};

function noStream(fail){
    console.log("error happened");
};

// const mediaStream = await
// navigator.mediaDevices.getUserMedia({video: true});
// const video = document.createElement('video');
// if ('srcObject' in video) {
//   video.srcObject = mediaStream;
// } else {
//   // Avoid using this in new browsers, as it is going away.
//   video.src = URL.createObjectURL(mediaStream);
// }
