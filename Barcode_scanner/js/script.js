
const container = document.getElementById('container');

//--------------
const ur_session_num_cont = document.getElementById('ur_session_num_cont');
const session_num_content = document.getElementById('session_num_content');
const sess_input = document.getElementById('sess_input');
const session_num_but_cont = document.getElementById('session_num_but_cont');
const next_but = document.getElementById('next_but');
const give_name_but = document.getElementById('give_name_but');

//--------------

const store_adress_cont = document.getElementById('store_adress_cont');
const store_adress_content = document.getElementById('store_adress_content');
const cancel_but_adress = document.getElementById('cancel_but_adress');

// const Krasnoe = document.getElementById('Krasnoe');
// const Polock = document.getElementById('Polock');
// const Glubokoe = document.getElementById('Glubokoe');
// const Radoshk = document.getElementById('Radoshk');
// const Sputnik = document.getElementById('Sputnik');
// const Belmash = document.getElementById('Belmash');
// const Libavo = document.getElementById('Libavo');
// const Turly = document.getElementById('Turly');

//--------------
const header_cont = document.getElementById('header_cont');
const refresh_but = document.getElementById('refresh_but');
const session_but = document.getElementById('session_but');
const all_sessions_cont = document.getElementById('all_sessions_cont');
const all_sess_cont_content = document.getElementById('all_sess_cont_content');
const session_text = document.getElementById('session_text');
const session_power_but = document.getElementById('session_power_but');
const sessions_blur = document.getElementById('sessions_blur');

const help_but = document.getElementById('help_but');

const menue_but = document.getElementById('menue_but');
const mark_but = document.getElementById('mark_but');

//--------------

const header = document.querySelector('header');
const menue_bar = document.getElementById('menue_bar');

const docs_cont = document.getElementById('docs_cont');
const docs_cont_content = document.getElementById('docs_cont_content');
const inv_1 = document.getElementById('inv_1');
// const eye = document.querySelector('#inv_1 span');
const docs_info = document.getElementById('docs_info');
const docs_not_found = document.getElementById('docs_not_found');
const expand_but = document.getElementById('expand_but');

const menue_sec_cont = document.getElementById('menue_sec_cont');
const new_doc_but = document.getElementById('new_doc_but');
const icons_bar = document.getElementById('icons_bar');

const download_but = document.getElementById('download_but');
const download_back_but = document.getElementById('download_back_but');
const check = document.getElementById('check');

//--------------

const doc_types_cont = document.getElementById('doc_types_cont');
const doc_types_content = document.getElementById('doc_types_content');
const cancel_but_doc_types = document.getElementById('cancel_but_doc_types');
const invenory_but = document.getElementById('invenory_but');
const price_request_but = document.getElementById('price_request_but');
const prod_taking_but = document.getElementById('prod_taking_but');
const prod_removing_but = document.getElementById('prod_removing_but');
const scanner_but = document.getElementById('scanner_but');

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
mark_but.addEventListener('click', menue_toggle);
// inv_1.addEventListener('click', () => {console.log('Большая')});
// eye.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('Маленькая')});
expand_but.addEventListener('click', docs_cont_toggle);

new_doc_but.addEventListener('click', docs_types_toggle);
cancel_but_doc_types.addEventListener('click', docs_types_toggle);
download_but.addEventListener('click', check_act);
download_back_but.addEventListener('click', downloading_back);

session_but.addEventListener('click', sessions_cont_toggle);

session_power_but.addEventListener('click', adress_chose_toggle);
cancel_but_adress.addEventListener('click', adress_chose_toggle);

// Krasnoe.addEventListener('click', sess_start_stop);
// Polock.addEventListener('click', sess_start_stop);
// Glubokoe.addEventListener('click', sess_start_stop);
// Radoshk.addEventListener('click', sess_start_stop);
// Sputnik.addEventListener('click', sess_start_stop);
// Belmash.addEventListener('click', sess_start_stop);
// Libavo.addEventListener('click', sess_start_stop);
// Turly.addEventListener('click', sess_start_stop);

next_but.addEventListener('click', sess_num_confirm);
give_name_but.addEventListener('click', sess_input_act);

invenory_but.addEventListener('click', (e) => {e.preventDefault()});
price_request_but.addEventListener('click', (e) => {e.preventDefault()});
prod_taking_but.addEventListener('click', (e) => {e.preventDefault()});
prod_removing_but.addEventListener('click', (e) => {e.preventDefault()});
scanner_but.addEventListener('click', (e) => {e.preventDefault()});

const doc = document.documentElement;

let today = new Date().toLocaleDateString();
let session_name = false;
let sess_num;


// For easy working ----------
const Moz = navigator.userAgent.includes('Mozilla/5.0 (iPhone');
const fMode = {exact: "environment"};
// const fMode = {exact: "user"};

document.addEventListener("DOMContentLoaded", () => {
    session_name = localStorage.getItem('session_name');
    if (session_name) session_record();

    if (Moz) sessions_blur.style.backgroundColor = '#ebf4fffa';
    // if (Moz) sessions_blur.style.backgroundColor = '#ebf4fffa';

    water_tag.classList.add('light');
    setTimeout(() => {water_tag.classList.remove('light')}, 1000);
}); 

const options = {
    video: {
    width: 1255, //height
    height: 1000, //width
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

    docs_cont_expand_off();

    setTimeout(() => {menue_bar.classList.toggle('toggle')}, 10);
};

function docs_cont_expand_off(){
    first_el = docs_cont_content.querySelector('li:first-child');
    if (first_el) {
        first_el.classList.add('select');
        setTimeout(() => {first_el.classList.remove('select')}, 10);
    };

    docs_cont_content.scrollTo({top: 0, behavior: "smooth"});
    docs_cont.classList.remove('active');
    menue_sec_cont.classList.remove('active');
    expand_but.classList.remove('active');
};

function check_act(){
    setTimeout(() => {check.classList.add('active');
    setTimeout(() => {check.classList.remove('active')}, 1300);
}, 700)};

function sessions_cont_toggle(){
    all_sessions_cont.classList.toggle('toggle');
    setTimeout(() => {all_sess_cont_content.classList.toggle('toggle')}, 10);
};


function adress_chose_toggle(){
    if(!session_name){
        store_adress_cont.classList.toggle('toggle');
        setTimeout(() => {store_adress_content.classList.toggle('toggle')}, 10);
    }else {
        sess_start_stop()
    };
};

function sess_start_stop(){
    if(!session_name){
        adress_chose_toggle();
        ur_session_num_cont.classList.add('toggle');
        setTimeout(() => {session_num_content.classList.add('toggle')}, 10);
        sessions_cont_toggle();

        sess_num = session_num.innerText;
        session_name = `${today}-${sess_num}`;
        sess_input.setAttribute("placeholder", session_name);
    }else {
        // sessions_cont_toggle();
        session_but.classList.remove('active');
        session_power_but.classList.remove('active');
        session_name = false;
        session_but.innerText = 'Нет сессии';
        session_text.innerText = 'Подключиться к сессии';
        localStorage.removeItem('session_name');
    };
};

function sess_num_confirm(){
    ur_session_num_cont.classList.remove('toggle');
    session_num_content.classList.remove('toggle');
    
    if (sess_input.value != 0){
        session_name = `${sess_input.value}-${sess_num}`;
        // console.log(session_name);
    };
    
    session_record();

    sess_input.value = '';
    session_num_but_cont.style.marginTop = '1rem';
    sess_input.classList.remove('active');
    setTimeout(() => {sess_input.style.display = 'none'}, 100);
};

function session_record(){
    session_but.innerText = session_name.replace(' ', '_');
    session_but.classList.add('active');
    session_power_but.classList.add('active');
    session_text.innerText = 'Отключиться от сессии';
    localStorage.setItem('session_name', session_name);
};

function sess_input_act(){
    sess_input.value = '';
    if (!sess_input.classList.contains('active')){
        session_num_but_cont.style.marginTop = '6rem';
        sess_input.style.display = 'inline-block';
        setTimeout(() => {sess_input.classList.add('active'), 10});
        sess_input.focus();
        window.scrollTo(0, document.body.scrollHeight);
    }else {
        session_num_but_cont.style.marginTop = '1rem';
        sess_input.classList.remove('active');
        setTimeout(() => {sess_input.style.display = 'none'}, 100);
    };
};

function downloading_back(){
    if (!session_name){
        setTimeout(() => {
            sessions_cont_toggle();
        }, 10);
    }else {
        check_act();
    };
};

function docs_cont_toggle(){
    docs_cont.classList.toggle('active');
    menue_sec_cont.classList.toggle('active');
    expand_but.classList.toggle('active');
};

function docs_types_toggle(){
    doc_types_cont.classList.toggle('toggle');
    setTimeout(() => {doc_types_content.classList.toggle('toggle')}, 10);
};

document.addEventListener('click', (event) => {
    if (all_sessions_cont.classList.contains('toggle')){
        
        const sessions_cont_inside = event.composedPath().includes(all_sessions_cont);
        const session_but_inside = event.composedPath().includes(session_but);

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

input.addEventListener('focus', () => {
    input_focus();
});

input.addEventListener('blur', () => {
    setTimeout(input_blur, 20);
});


sess_input.addEventListener('focus', () => {
    ur_session_num_cont.style.bottom = '0';
    window.scrollTo(0, document.body.scrollHeight);
});

sess_input.addEventListener('blur', () => {
    setTimeout(() => {ur_session_num_cont.style.bottom = 'auto'}, 110);
});

docs_cont_content.addEventListener('scroll', () => {
    if (docs_cont_content.scrollTop != 0) docs_info.classList.add('hiden')
    else docs_info.classList.remove('hiden');
  });

docs_cont_content.addEventListener('touchstart', (e) => {
    const id = e.target.getAttribute('id');
    if (!id || id == 'docs_cont_content') return;  // preventEvent
    // console.log(id);

    // Swiping doc
    let posX = e.changedTouches[0].clientX;
    let swipe = 230;
    
    let timeout
    if (e.target.previousElementSibling != null) {
        e.target.addEventListener('touchmove', (event) => {
            event.changedTouches[0].clientX - posX > swipe && swipeRight();
        });
    };
    
    function swipeRight(){
        if (timeout) clearTimeout(timeout);
        // console.log('swipe right');
        e.target.classList.add('del_toggle');
        timeout = setTimeout(() => {
            // console.log('close');
            e.target.classList.remove('del_toggle');
        }, 1300);
    };
});

store_adress_content.addEventListener('click', (e) => {
    const id = e.target.getAttribute('id');
    const tag = e.target.tagName;
    // console.log(tag);
    if (tag == 'A') sess_start_stop();
});

doc_types_content.addEventListener('click', (e) => {
    // const id = e.target.getAttribute('id');
    const class_name = e.target.classList[0];
    const text_name = e.target.innerText;
    const tag = e.target.tagName;
    // console.log(class_name, text_name, tag);

    if(tag == 'A'){
        docs_cont_content.insertAdjacentHTML('afterbegin', `
            <li id="scan_1" class="${class_name}">${text_name}
                <a>
                    <i class="fa-solid fa-eye"></i>
                </a>
                <button>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </li>
        `);

        docs_cont_expand_off();

        docs_types_toggle();
    };

});

docs_cont_content.addEventListener('DOMNodeInserted', (e) =>{
    const docs_count = docs_cont_content.getElementsByTagName('li').length;
    // console.log(docs_count);
    if (docs_count == 0) {
        // console.log('0');
        docs_not_found.classList.remove('no_active');
        docs_cont_content.style.justifyContent = 'center';
        docs_cont.style.justifyContent = 'center';
    }else if (docs_count > 3){
        // console.log('>3: '+ docs_count);
        docs_cont_content.style.justifyContent = 'flex-start';
        docs_cont.style.justifyContent = 'flex-start';
        docs_cont_content.style.overflow = 'auto';
        expand_but.style.display = 'flex';
    }else if (docs_count > 0) {
        // console.log('>0');
        docs_cont_content.style.justifyContent = 'center';
        docs_cont.style.justifyContent = 'center';
        docs_not_found.classList.add('no_active');
        docs_cont_content.style.overflow = 'hidden';
        expand_but.style.display = 'none';
    };
});

// Не работает
// window.addEventListener('blur', () => {
//     video.classList.remove('active');
//     Quagga.pause();
//     video.classList.remove('camera_on');
//     scan_icon.classList.remove('camera_on');
// });


function input_focus(){
    // if (Moz) {
    input_block.style.paddingBottom = "10vh";
    container.style.justifyContent = 'flex-end';
    // };
    // else input_block.style.paddingBottom = '50vh';
    // container.style.justifyContent = 'flex-end';
    main_block.style.display = 'none';
    water_tag.style.display = 'none';
    header_cont.style.display = 'none';
    window.scrollTo(0, document.body.scrollHeight);
};

function input_blur(){
    // if (Moz) {
    input_block.style.paddingBottom = "5vh";
    container.style.justifyContent = 'center';
    // };
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
            area: {
                top: '10%',
                right: '10%',
                bottom: '10%',
                left: '10%',
            },
        },
        frequency: 4,
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