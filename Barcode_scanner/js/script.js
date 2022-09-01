
if(navigator.webkitGetUserMedia!=null) { 
    // запрашиваем доступ к веб-камере
    navigator.webkitGetUserMedia({video: true}, getStream, noStream);
};


function getStream(stream){
    let video = document.querySelector('video'); 
    let url = webkitURL.createObjectURL(stream);
    video.src = url;
};

function noStream(fail){
    console.log("error happened");
};