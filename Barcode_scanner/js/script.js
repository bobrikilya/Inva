
let video = document.querySelector('video');
let camera_button = document.querySelector('.camera');
let search_button = document.querySelector('.search');
let clear_button = document.querySelector('.clear');
let input = document.querySelector('input');
let input_zone = document.querySelector('.input_block');
let stream_cont = document.querySelector('.camera_block');
let scan_icon = document.querySelector('.scan_icon');
let info_block = document.querySelector('.info_block');


camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', inpute_cleaning);
search_button.addEventListener('click', searching);


let options = {
    video: {
    width: 1920, //height
    height: 1920, //width
    facingMode: {exact: "environment"},
    }
};


// Camera access request
function camera_access(){
    if (!video.classList.contains('active')){
        if       (navigator.getUserMedia!=null) {
                  navigator.getUserMedia(options, getStream, noStream);
        // Chrome    
        }else if (navigator.webkitGetUserMedia!=null){
                  navigator.webkitGetUserMedia(options, getStream, noStream);
        // Firefox
        }else if (navigator.mozGetUserMedia!=null){
                  navigator.mozGetUserMedia(options, getStream, noStream);
        // Other
        }else if (navigator.msUserMedia!=null){
                  navigator.msGetUserMedia(options, getStream, noStream);

        }else alert("Камера не найдена");
    }else toggle_camera(); 
};

function getStream(stream){
    video.classList.add('camera_on');
    video.srcObject = stream;
    video.onloadedmetadata = function(){
        video.play();
        open_camera();
    };
};

function noStream(){
    setTimeout(() => {alert("Вы не дали доступ к камере");
    }, 800);
    Quagga.pause();
    video.classList.remove('camera_on');
    scan_icon.classList.remove('camera_on');
};

function open_camera(){
    video.classList.add('active');
    stream_start();
    scan_icon.classList.add('camera_on');
};

function toggle_camera(){
    if (video.classList.contains('camera_on')){
        Quagga.pause();
        video.classList.remove('camera_on');
        scan_icon.classList.remove('camera_on');
    }else {
        Quagga.start();
        video.classList.add('camera_on');
        scan_icon.classList.add('camera_on');
        input_zone.classList.remove('info_on');
        info_block.classList.remove('info_on');
    };
};

function inpute_cleaning(){
    input_blur();
    input.value = '';
    input_zone.classList.remove('info_on');
    info_block.classList.remove('info_on');
};

function searching(){
    // console.log('Hello');
    if (input.value = '1') {
        Quagga.pause();
        input_blur();
        input_zone.classList.add('info_on');
        info_block.classList.add('info_on');
        video.classList.remove('camera_on');
        scan_icon.classList.remove('camera_on');
    };
};

function request(code){
    // Quagga.pause();
    input.value = code;
    input_blur();
    input_zone.classList.add('info_on');
    info_block.classList.add('info_on');
    toggle_camera();
};


// Number filter
input.addEventListener('keydown', (event) => {
    if (event.key == '-' || event.key == '.') event.preventDefault();
	if (['Escape', 'Delete', 'Tab', 'Backspace', 
         'Home', 'End', 'ArrowLeft', 'ArrowRight',
         '1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
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
    stream_cont.classList.add('onfocus');
    input_zone.classList.add('onfocus');
    input.classList.add('onfocus');
};

function input_blur(){
    stream_cont.classList.remove('onfocus');
    input_zone.classList.remove('onfocus');
    input.classList.remove('onfocus');
};


function stream_start(){
    Quagga.init({
        inputStream : {
            name : "Live",
            type : "LiveStream",
            target: video,
        },
        frequency: 5,
        decoder: {
            readers: ["ean_reader"],
            multiple: false,
        },
        debug: false,
    }, function(err) {
        if (err) {
            console.log(err);
            console.log("Поломал");
            return
        }
        Quagga.start();
    });

    Quagga.onDetected((result) => {
        let code = result.codeResult.code;
        request(code);
    });
};