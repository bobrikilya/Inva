
const container = document.getElementById('container');

//--------------
const ur_session_num_cont = document.getElementById('ur_session_num_cont');
const session_num_content = document.getElementById('session_num_content');
const next_but = document.getElementById('next_but');
const give_name_but = document.getElementById('give_name_but');

//--------------

const header_cont = document.getElementById('header_cont');
const refresh_but = document.getElementById('refresh_but');
const session_but = document.getElementById('session_but');
const all_sessions_cont = document.getElementById('all_sessions_cont');
const all_sess_cont_content = document.getElementById('all_sess_cont_content');
const session_power_but = document.getElementById('session_power_but');
const sessions_blur = document.getElementById('sessions_blur');

const help_but = document.getElementById('help_but');

const menue_but = document.getElementById('menue_but');
const mark_but = document.getElementById('mark_but');

//--------------

const header = document.querySelector('header');
const menue_bar = document.getElementById('menue_bar');
const scanner_but = document.getElementById('scanner_but');
const mass_scanner_but = document.getElementById('mass_scanner_but');
const invenory_but = document.getElementById('invenory_but');

const download_but = document.getElementById('download_but');
const download_back_but = document.getElementById('download_back_but');
const check = document.getElementById('check');

//--------------

const main_block = document.getElementById('main_block');
const stream_cont = document.getElementById('stream_cont');
const video = main_block.querySelector('video');
const scan_icon = document.getElementById('scan_icon');
const info_block = document.getElementById('info_block');
const camera_button = document.getElementById('camera_butt');

//--------------

const input_block = document.getElementById('input_block');
const input = document.getElementById('input');
const clear_button = document.getElementById('clear_butt');
const search_button = document.getElementById('search_butt');

//--------------
const water_tag = document.getElementById('water_tag');



camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', input_cleaning);
search_button.addEventListener('click', searching);
refresh_but.addEventListener('click', refresh);
menue_but.addEventListener('click', menue_toggle);
mark_but.addEventListener('click', menue_toggle);
download_but.addEventListener('click', check_act);
download_back_but.addEventListener('click', check_act);
session_but.addEventListener('click', sessions_cont_toggle);
session_power_but.addEventListener('click', giving_sess_num);
next_but.addEventListener('click', sess_num_confirm);

scanner_but.addEventListener('click', (e) => {e.preventDefault()});
mass_scanner_but.addEventListener('click', (e) => {e.preventDefault()});
invenory_but.addEventListener('click', (e) => {e.preventDefault()});

const doc = document.documentElement;
let session_power = false;

// For easy working ----------
const Moz = navigator.userAgent.includes('Mozilla/5.0 (iPhone');
const fMode = {exact: "environment"};
// const fMode = {exact: "user"};

document.addEventListener("DOMContentLoaded", () => {
    water_tag.classList.add('light');
    setTimeout(() => {water_tag.classList.remove('light')}, 1000);

    if (Moz) sessions_blur.style.backgroundColor = '#ebf4fffa';
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
    help_but.classList.toggle('toggle');
    menue_but.classList.toggle('toggle');
    mark_but.classList.toggle('toggle');
    header.classList.toggle('turn_on');
    setTimeout(() => {menue_bar.classList.toggle('toggle')}, 10);
};

function check_act(){
    setTimeout(() => {check.classList.add('active');
    setTimeout(() => {check.classList.remove('active')}, 1300);
}, 700)};

function sessions_cont_toggle(){
    all_sessions_cont.classList.toggle('toggle');
    all_sess_cont_content.classList.toggle('toggle');
};

function giving_sess_num(){
    if(!session_power){
        ur_session_num_cont.classList.toggle('toggle');
        setTimeout(() => {session_num_content.classList.toggle('toggle')}, 10);
    }else {

        session_but.classList.remove('active');
        session_power_but.classList.remove('active');
        session_power = false;
        session_but.innerText = 'Нет сессии';
    };
};

function sess_num_confirm(){
    ur_session_num_cont.classList.remove('toggle');
    session_num_content.classList.remove('toggle');

    
    today = new Date().toLocaleDateString();
    sess_num = session_num.innerText;
    // console.log(today);
    let session_name = `${today}-${sess_num}`
    session_but.innerText = session_name;
    
    session_but.classList.add('active');
    session_power_but.classList.add('active');
    session_power = true;
};

document.addEventListener('click', (event) => {
    if (all_sessions_cont.classList.contains('toggle')){

        const sessions_cont_inside= event.composedPath().includes(all_sessions_cont);
        const session_but_inside= event.composedPath().includes(session_but);

        if (!sessions_cont_inside && !session_but_inside) {
            all_sessions_cont.classList.remove('toggle');
            all_sess_cont_content.classList.remove('toggle');
        };
    };
});


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