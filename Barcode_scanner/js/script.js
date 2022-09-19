
const video = document.getElementById('video');
const camera_button = document.getElementById('camera_butt');
const search_button = document.getElementById('search_butt');
const clear_button = document.getElementById('clear_butt');
const input = document.getElementById('input');
const input_block = document.getElementById('input_block');
const camera_block = document.getElementById('camera_block');
const stream_cont = document.getElementById('stream_cont');
const scan_icon = document.getElementById('scan_icon');
const info_block = document.getElementById('info_block');
const water_tag = document.getElementById('water_tag');
const container = document.getElementById('container');


camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', inpute_cleaning);
search_button.addEventListener('click', searching);

const doc = document.documentElement;

// For easy working ----------
const Moz = navigator.userAgent.includes('Mozilla/5.0 (iPhone');
// const Moz = true
const fMode = Moz ? {exact: "user"} : {exact: "environment"};
// console.log(navigator.userAgent)
// alert(Moz)


const options = {
    video: {
    width: 2255, //height
    height: 1800, //width
    facingMode: fMode,
    }
};


// Camera access request ----------
function camera_access(){
    cancelFullScreen();
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
        }else if (navigator.mediaDevices.getUserMedia!=null){
                navigator.mediaDevices.getUserMedia(options).then(getStream).catch(noStream);

        }else () => {
            alert("Камера не найдена");
            video.classList.remove('camera_on');
            scan_icon.classList.remove('camera_on');
        };
    }else toggle_camera(); 
};

function getStream(stream){
    info_block.style.display = 'none';
    stream_cont.style.display = 'flex';
    video.srcObject = stream;
    video.play();
    open_camera();
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
        info_block.style.display = 'none';
        stream_cont.style.display = 'flex';
        video.classList.add('camera_on');
        scan_icon.classList.add('camera_on');
    };
};

function inpute_cleaning(){
    input_blur();
    input.value = '';
    info_block.style.display = 'none';
    stream_cont.style.display = 'flex';
};

function searching(){
    if (input.value == '1') {
        input_blur();
        Quagga.pause();
        info_block.style.display = 'flex';
        stream_cont.style.display = 'none';
        video.classList.remove('camera_on');
        scan_icon.classList.remove('camera_on');
    };
};

function request(code){
    input_blur();
    input.value = code;
    info_block.style.display = 'flex';
    stream_cont.style.display = 'none';
    
    toggle_camera();
};

// function startFullScreen() {
//     const docEl = doc.documentElement;
    
//     const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen;

//     if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement) { 
//         requestFullScreen.call(doc);
//     };

//     if(!doc.fullscreenElement && !doc.mozFullScreenElement 
//                    && !doc.webkitFullscreenElement) {
//                     cancelFullScreen.call(doc);
//                     // video.classList.remove('camera_on');
//                     // scan_icon.classList.remove('camera_on');
//                 };

// };

function startFullScreen() {
    if(doc.requestFullscreen) {
        doc.requestFullscreen();
    } else if(doc.webkitrequestFullscreen) {
        doc.webkitRequestFullscreen();
    } else if(doc.mozRequestFullscreen) {
        doc.mozRequestFullScreen();
    }
};


function cancelFullScreen() {
    if(doc.exitFullscreen) {
        console.log('1');
        doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
        console.log('2');
        doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
        console.log('3');
        doc.webkitExitFullscreen();
    }
  };


// function cancelFullScreen() {
//     // if(document.requestFullscreen) {
//     //   document.requestFullscreen();
//     // } else if(document.webkitRequestFullscreen ) {
//     //   document.webkitRequestFullscreen();
//     // } else if(document.mozRequestFullscreen) {
//     //   document.mozRequestFullScreen();
//     // }
//     cancelFullScreen.call(window.document);
//   }


// Number filter ----------
input.addEventListener('keydown', (event) => {
    if (event.key == '-' || event.key == '.') event.preventDefault();
	if (['Escape', 'Delete', 'Tab', 'Backspace', 
         'Home', 'End', 'ArrowLeft', 'ArrowRight',
         '1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
	} else event.preventDefault();
});

input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') searching();
});


input.addEventListener('blur', () => {
    input_blur();
});

input.addEventListener('focus', () => {
    input_focus();
});

document.addEventListener('click', () => {
    if (!Moz){
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement) { 
            startFullScreen();
        };
    };
});

// window.addEventListener('blur', () => {
//     startFullScreen();
//     // cancelFullScreen();
//     // if(!doc.fullscreenElement && !doc.mozFullScreenElement 
//     //     && !doc.webkitFullscreenElement) {
            
//     video.classList.remove('camera_on');
//     scan_icon.classList.remove('camera_on');
//     //  };
// });

// document.addEventListener('click', (event) => {
//     const insideInput = event.composedPath().includes(input);
//     const insideSearch = event.composedPath().includes(search_button);
//     const insideClear = event.composedPath().includes(clear_button);

//     

//     if (input_block.classList.contains('onfocus') &&
//     !insideInput && !insideSearch && !insideClear)
//     input_blur()
//     else if (insideInput && !input_block.classList.contains('onfocus'))
//     input_focus();
// });


function input_focus(){
    water_tag.style.display = 'none';
    input_block.style.marginBottom = '0.5vh';
    camera_block.style.display = 'none';
};

function input_blur(){
    input.blur();
    water_tag.style.display = 'block';
    input_block.style.marginBottom = '6vh';
    camera_block.style.display = 'flex';
};


function stream_start(){
    Quagga.init({
        locate: true,
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
        locator: {
            halfSample: true,
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
        Quagga.pause();
        const code = result.codeResult.code;
        request(code);
    });
};