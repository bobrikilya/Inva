
const video = document.querySelector('video');
const camera_button = document.getElementById('camera_butt');
const search_button = document.getElementById('search_butt');
const clear_button = document.getElementById('clear_butt');
const input = document.getElementById('input');
const input_block = document.getElementById('input_block');
const main_block = document.getElementById('main_block');
const stream_cont = document.getElementById('stream_cont');
const scan_icon = document.getElementById('scan_icon');
const info_block = document.getElementById('info_block');
const water_tag = document.getElementById('water_tag');
const container = document.getElementById('container');
const menue_but = document.getElementById('menue_but');
const mark_but = document.getElementById('mark_but');
const bg_blur = document.getElementById('bg_blur');

const scanner_but = document.getElementById('scanner_but');
const mass_scanner_but = document.getElementById('mass_scanner_but');
const invenory_but = document.getElementById('invenory_but');

const download_but = document.getElementById('download_but');
const download_back_but = document.getElementById('download_back_but');
const check = document.getElementById('check');

const refresh_but = document.getElementById('refresh_but');
const header = document.querySelector('header');


camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', input_cleaning);
search_button.addEventListener('click', searching);
refresh_but.addEventListener('click', refresh);
menue_but.addEventListener('click', menue_toggle);
mark_but.addEventListener('click', menue_toggle);
download_but.addEventListener('click', check_act);
download_back_but.addEventListener('click', check_act);

scanner_but.addEventListener('click', (e) => {e.preventDefault()});
mass_scanner_but.addEventListener('click', (e) => {e.preventDefault()});
invenory_but.addEventListener('click', (e) => {e.preventDefault()});

const doc = document.documentElement;

// For easy working ----------
const Moz = navigator.userAgent.includes('Mozilla/5.0 (iPhone');
const fMode = {exact: "environment"};
// const fMode = {exact: "user"};

document.addEventListener("DOMContentLoaded", () => {
    water_tag.classList.add('light');
    setTimeout(() => {water_tag.classList.remove('light')}, 1000);
}); 

const options = {
    video: {
    width: 2255, //height
    height: 1800, //width
    facingMode: fMode,
    },
};

// Camera access request ----------
function camera_access(){
    if (!video.classList.contains('active')){
        video.classList.add('camera_on');
        // if       (navigator.getUserMedia!=null) {
        //           navigator.getUserMedia(options, getStream, noStream);
        // // Chrome
        // }else if (navigator.webkitGetUserMedia!=null){
        //           navigator.webkitGetUserMedia(options, getStream, noStream);
        // // Firefox
        // }else if (navigator.mozGetUserMedia!=null){
        //           navigator.mozGetUserMedia(options, getStream, noStream);
        // // Other
        // }else if (navigator.msGetUserMedia!=null){
        //           navigator.msGetUserMedia(options, getStream, noStream);
        // Apple
        if (navigator.mediaDevices.getUserMedia!=null){
                navigator.mediaDevices.getUserMedia(options).then(getStream).catch(noStream);

        }else () => {
            alert("Камера не найдена");
            Quagga.pause();
            video.classList.remove('camera_on');
            scan_icon.classList.remove('camera_on');
        };
    }else toggle_camera(); 
};

async function getStream(stream){
    info_block.style.display = 'none';
    stream_cont.style.display = 'flex';
    video.srcObject = await stream;
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

function input_cleaning(){
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

function refresh(){
    window.location.reload();
};

function menue_toggle(){
    bg_blur.classList.toggle('toggle');
    menue_but.classList.toggle('toggle');
    mark_but.classList.toggle('toggle');
    header.classList.toggle('turn_on');
};

function check_act(){
    setTimeout(() => {check.classList.add('active');
    setTimeout(() => {check.classList.remove('active')}, 1300);
}, 700)};


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
    setTimeout(input_blur, 20);
});

input.addEventListener('focus', () => {
    input_focus();
});

// Не работает
// window.addEventListener('blur', () => {
//     video.classList.remove('active');
//     Quagga.pause();
//     video.classList.remove('camera_on');
//     scan_icon.classList.remove('camera_on');
// });


function input_focus(){
    if (Moz) {
        input_block.style.paddingBottom = "10vh";
        container.style.justifyContent = 'flex-end';
    };
    // else input_block.style.paddingBottom = '50vh';
    // container.style.justifyContent = 'flex-end';
    main_block.style.display = 'none';
    water_tag.style.display = 'none';
    header_cont.style.display = 'none';
};

function input_blur(){
    if (Moz) {
        input_block.style.paddingBottom = "5vh";
        container.style.justifyContent = 'center';
    };
    main_block.style.display = 'flex';
    header_cont.style.display = 'flex';
    water_tag.style.display = 'inline-block';
    input.blur();
};


function stream_start(){
    Quagga.init({
        // locate: true,
        inputStream : {
            name : "Live",
            type : "LiveStream",
            target: video,
        },
        frequency: 3,
        decoder: {
            readers: ["ean_reader"],
            multiple: false,
        },
        // locator: {
        //     halfSample: true,
        // },
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