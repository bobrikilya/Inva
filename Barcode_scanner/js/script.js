
let video = document.querySelector('video');
let camera_button = document.querySelector('.camera');
let search_button = document.querySelector('.search');
let clear_button = document.querySelector('.clear');
let input = document.querySelector('input');
let input_zone = document.querySelector('.input_zone');


camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', inpute_cleaning);


let options = {
    video: {
    width: 1380, //height
    height: 1920, //width
    facingMode: {exact: "environment"},
    }
};

let webcamStream;

// Camera access request
function camera_access(){
    if (!video.classList.contains('active')){
        if       (navigator.getUserMedia!=null) {
                  navigator.getUserMedia(options, getStream, noStream);
                  open_camera();
        // Chrome    
        }else if (navigator.webkitGetUserMedia!=null){
                  navigator.webkitGetUserMedia(options, getStream, noStream);
                  open_camera();
        // Firefox
        }else if (navigator.mozGetUserMedia!=null){
                  navigator.mozGetUserMedia(options, getStream, noStream);
                  open_camera();
        // Other
        }else if (navigator.msUserMedia!=null){
                  navigator.msGetUserMedia(options, getStream, noStream);
                  open_camera();

        }else alert("Камера не найдена");
    }else camera_off(); 
};

function getStream(stream){
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.play();
    };
    webcamStream = stream;
};

function noStream(){
    setTimeout(() => {alert("Вы не дали доступ к камере");
    }, 800);
};

function open_camera(){
    video.classList.add('active');
    stream_start();
};

function camera_off(){
    video.classList.remove('active');
    webcamStream.getTracks()[0].stop();
    Quagga.stop();
};

function inpute_cleaning(){
    input_blur();
    input.value = '';
};

// Number filter
input.addEventListener('keydown', (event) => {
    if (event.key == '-' || event.key == '.') event.preventDefault();
	if (['Escape', 'Delete', 'Tab', 'Backspace', 
         'Home', 'End', 'ArrowLeft', 'ArrowRight',
         '1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
            return
	} else event.preventDefault();
});


document.addEventListener('click', (event) => {
    const insideInput = event.composedPath().includes(input);
    const insideSearch = event.composedPath().includes(search_button);
    const insideClear = event.composedPath().includes(clear_button);
    
    if (input_zone.classList.contains('onfocus') &&
    !insideInput && !insideSearch && !insideClear)
    input_blur()
    else if (insideInput && !input_zone.classList.contains('onfocus'))
    input_focus();
});

function input_focus(){
    video.classList.add('onfocus');
    input_zone.classList.add('onfocus');
    input.classList.add('onfocus');
    camera_button.classList.add('onfocus');
};

function input_blur(){
    video.classList.remove('onfocus');
    input_zone.classList.remove('onfocus');
    input.classList.remove('onfocus');
    camera_button.classList.remove('onfocus');
};


function stream_start(){
    Quagga.init({
        inputStream : {
        name : "Live",
        type : "LiveStream",
        target: video,
        },
        frequency: 15,
        decoder: {
            readers: ["ean_reader"],
        }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        Quagga.start();
    });

    Quagga.onDetected(function(result) {
        let code = result.codeResult.code;
        input.value = code;
    });
};



