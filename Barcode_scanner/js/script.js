
const video = document.querySelector('video');
const camera_button = document.querySelector('.camera');
const search_button = document.querySelector('.search');
const clear_button = document.querySelector('.clear');
const input = document.querySelector('input');
const input_zone = document.querySelector('.input_block');
const camera_block = document.querySelector('.camera_block');
const stream_cont = document.querySelector('.stream_cont');
const scan_icon = document.querySelector('.scan_icon');
const info_block = document.querySelector('.info_block');

camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', inpute_cleaning);
search_button.addEventListener('click', searching);

// For easy working 
const doc = window.document;
const Moz = navigator.userAgent.includes('Mozilla/5.0 (iPhone;', 'Mozilla/5.0 (Linux;');
const fMode = Moz ? {exact: "user"} : {exact: "environment"};
console.log(navigator.userAgent)


const options = {
    video: {
    width: 2205, //height
    height: 1800, //width
    facingMode: fMode,
    }
};


// Camera access request
function camera_access(){
    if (!video.classList.contains('active')){
        video.classList.add('camera_on');
        if       (navigator.getUserMedia!=null) {
                  navigator.getUserMedia(options, getStream, noStream);
        // Chrome
        }else if (navigator.webkitGetUserMedia!=null){
                  navigator.webkitGetUserMedia(options, getStream, noStream);
        // Firefox
        }else if (navigator.mozGetUserMedia!=null){
                  navigator.mozGetUserMedia(options, getStream, noStream);
        // Other
        }else if (navigator.msGetUserMedia!=null){
                  navigator.msGetUserMedia(options, getStream, noStream);
        // Apple
        }else if  (navigator.mediaDevices.getUserMedia!=null){
                  navigator.mediaDevices.getUserMedia(options, getStream, noStream);

        }else alert("Камера не найдена");
    }else toggle_camera(); 
};

function getStream(stream){
    input_zone.classList.remove('info_on');
    info_block.classList.remove('info_on');
    stream_cont.classList.remove('info_on');
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
        stream_cont.classList.remove('info_on');
    };
};

function inpute_cleaning(){
    input_blur();
    input.value = '';
    input_zone.classList.remove('info_on');
    info_block.classList.remove('info_on');
    stream_cont.classList.remove('info_on');
};

function searching(){
    if (input.value == '1') {
        input_blur();
        Quagga.pause();
        input_zone.classList.add('info_on');
        info_block.classList.add('info_on');
        stream_cont.classList.add('info_on');
        video.classList.remove('camera_on');
        scan_icon.classList.remove('camera_on');
    };
};

function request(code){
    input.value = code;
    input_blur();
    input_zone.classList.add('info_on');
    info_block.classList.add('info_on');
    stream_cont.classList.add('info_on');
    toggle_camera();
};

function startFullScreen() {
    const docEl = doc.documentElement;
    
    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement) { 
        requestFullScreen.call(docEl);
    };
    
    
};


// Number filter
input.addEventListener('keydown', (event) => {
    if (event.key == '-' || event.key == '.') event.preventDefault();
	if (['Escape', 'Delete', 'Tab', 'Backspace', 
         'Home', 'End', 'ArrowLeft', 'ArrowRight',
         '1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
	} else event.preventDefault();
});

input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter' && input_zone.classList.contains('onfocus')) searching();
});


input.addEventListener('blur', () => {
    input_blur();
});

document.addEventListener('click', (event) => {
    const insideInput = event.composedPath().includes(input);
    const insideSearch = event.composedPath().includes(search_button);
    const insideClear = event.composedPath().includes(clear_button);

    if (!Moz){
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement) { 
            startFullScreen();
        };
    };

    if (input_zone.classList.contains('onfocus') &&
    !insideInput && !insideSearch && !insideClear)
    input_blur()
    else if (insideInput && !input_zone.classList.contains('onfocus'))
    input_focus();
});

// window.onbeforeunload = () => {
window.onpagehide = () => {
    if(!doc.fullscreenElement && !doc.mozFullScreenElement 
       && !doc.webkitFullscreenElement) {
        cancelFullScreen.call(doc);
        video.classList.remove('camera_on');
        scan_icon.classList.remove('camera_on');
    };
};

function input_focus(){
    camera_block.classList.add('onfocus');
    input_zone.classList.add('onfocus');
    input.classList.add('onfocus');
};

function input_blur(){
    camera_block.classList.remove('onfocus');
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
        const code = result.codeResult.code;
        request(code);
    });
};