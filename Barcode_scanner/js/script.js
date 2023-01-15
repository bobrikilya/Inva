
const main_container = document.getElementById('main_container');

// Foot --------------

const foot_cont = document.getElementById('foot_cont');
const help_but = foot_cont.querySelector('#help_but');
const big_eye_but = foot_cont.querySelector('#big_eye_but');
const session_but = foot_cont.querySelector('#session_but');
const menue_but = foot_cont.querySelector('#menue_but');
const back_but = foot_cont.querySelector('#back_but');

const session_nav_cont = foot_cont.querySelector('#session_nav_cont');
const session_nav_content = session_nav_cont.querySelector('#session_nav_content');
const session_power_but = session_nav_content.querySelector('#session_power_but');
const session_text = session_nav_content.querySelector('#session_text');
const store_name_lit = session_nav_content.querySelector('#store_name_lit');

// Doc types --------------

const doc_types_cont = document.getElementById('doc_types_cont');
const doc_types_content = doc_types_cont.querySelector('#doc_types_content');
const cancel_but_doc_types = doc_types_content.querySelector('#cancel_but_doc_types');
const invenory_but = doc_types_content.querySelector('#invenory_but');
const price_request_but = doc_types_content.querySelector('#price_request_but');
const prod_taking_but = doc_types_content.querySelector('#prod_taking_but');
const prod_removing_but = doc_types_content.querySelector('#prod_removing_but');
const scanner_but = doc_types_content.querySelector('#scanner_but');

// Store address --------------

const store_address_cont = document.getElementById('store_address_cont');
const store_address_content = store_address_cont.querySelector('#store_address_content');
const cancel_but_address = store_address_content.querySelector('#cancel_but_address');

// Ur session --------------
const ur_session_num_cont = document.getElementById('ur_session_num_cont');
const session_num_content = ur_session_num_cont.querySelector('#session_num_content');
const sess_info_cont = session_num_content.querySelector('#sess_info_cont');
const ok_but = session_num_content.querySelector('#ok_but');

// Are u sure --------------

const are_u_sure_cont = document.getElementById('are_u_sure_cont');
const are_u_sure_content = document.getElementById('are_u_sure_content');
const no_but = are_u_sure_cont.querySelector('#no_but');
const yes_but = are_u_sure_cont.querySelector('#yes_but');

// Items search --------------

const items_cont = document.getElementById('items_cont');
const items_content = items_cont.querySelector('#items_content');

const item_search_cont = items_content.querySelector('#item_search_cont');
const item_search_input = item_search_cont.querySelector('#item_search_input');
const search_type_icon = item_search_cont.querySelector('#search_type_icon');

const doc_full_info_cont = items_content.querySelector('#doc_full_info_cont');
const doc_name = doc_full_info_cont.querySelector('#doc_name');
const doc_items_sum = doc_full_info_cont.querySelector('#doc_items_sum');
const doc_items_quantity = doc_full_info_cont.querySelector('#doc_items_quantity');
const doc_create_time = doc_full_info_cont.querySelector('#doc_create_time');
const doc_edit_time = doc_full_info_cont.querySelector('#doc_edit_time');
const items_not_found = items_content.querySelector('#items_not_found');

const items_list_cont_content = items_content.querySelector('#items_list_cont_content');

const items_flight_buts_cont = items_content.querySelector('#items_flight_buts_cont');
const search_sort_but_2 = items_flight_buts_cont.querySelector('#search_sort_but_2');
const close_item_cont_but_2 = items_flight_buts_cont.querySelector('#close_item_cont_but_2');
const open_keybrd_but = items_flight_buts_cont.querySelector('#open_keybrd_but');

const items_keybrd_cont = items_content.querySelector('#items_keybrd_cont');
const items_keybrd_cont_left = items_keybrd_cont.querySelector('#items_keybrd_cont_left');
const search_sort_but = items_keybrd_cont_left.querySelector('#search_sort_but');
const point_but = items_keybrd_cont_left.querySelector('#point_but');
const items_keybrd_cont_right = items_content.querySelector('#items_keybrd_cont_right');
const del_item_input_but = items_keybrd_cont_right.querySelector('#del_item_input_but');
const keybrd_search_but = items_keybrd_cont_right.querySelector('#keybrd_search_but');
const close_item_cont_but = items_keybrd_cont_right.querySelector('#close_item_cont_but');
const close_keybrd_but = items_keybrd_cont.querySelector('#close_keybrd_but');

// Header (Menue) --------------

const header = document.querySelector('header');
const menue_content = header.querySelector('#menue_content');

const menue_head_cont = menue_content.querySelector('#menue_head_cont');
const fire_but = menue_head_cont.querySelector('#fire_but');
const reload_but = menue_head_cont.querySelector('#reload_but');
const setting_but = menue_head_cont.querySelector('#setting_but');

const menue_main_cont = document.getElementById('menue_main_cont');
const docs_cont = menue_main_cont.querySelector('#docs_cont');
const check = docs_cont.querySelector('#check');
const docs_cont_content = docs_cont.querySelector('#docs_cont_content');
const docs_not_found = docs_cont_content.querySelector('#docs_not_found');
const swipe_icon = docs_cont_content.querySelector('#swipe_icon');

const menue_sec_cont = menue_main_cont.querySelector('#menue_sec_cont');
const new_doc_but = menue_sec_cont.querySelector('#new_doc_but');
const icons_bar = menue_sec_cont.querySelector('#icons_bar');
const download_but = icons_bar.querySelector('#download_but');
const download_back_but = icons_bar.querySelector('#download_back_but');


// Main --------------

const main_block = document.getElementById('main_block');
const stream_cont = main_block.querySelector('#stream_cont');
const video = stream_cont.querySelector('#video');
const scan_icon = stream_cont.querySelector('#scan_icon');
const info_block = main_block.querySelector('#info_block');
const camera_button = main_block.querySelector('#camera_butt');

// Input --------------

const input_block = document.getElementById('input_block');
const input = input_block.querySelector('#input');
const clear_button = input_block.querySelector('#clear_butt');
const search_button = input_block.querySelector('#search_butt');

// Tag --------------

const water_tag = document.getElementById('water_tag');

// --------------------------------------------------------

camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', input_cleaning);
search_button.addEventListener('click', searching);
reload_but.addEventListener('click', refresh);

big_eye_but.addEventListener('click', () =>{
    header_toggle();
    is_file = true;
    items_cont_open(last_op_doc);
});
menue_but.addEventListener('click', header_toggle);
back_but.addEventListener('click', return_to_doc);

new_doc_but.addEventListener('click', (e) => {
    e.preventDefault();
    docs_types_toggle();
});

let download = false;

cancel_but_doc_types.addEventListener('click', docs_types_toggle);
download_but.addEventListener('click', () =>{
    are_u_sure_content.querySelector('#icons_cont').style.flexDirection = "row";
    are_u_sure_content.querySelector('#are_u_sure_text').innerText = 'Загрузить данные с сервера?';
    download = 'download';
    are_u_sure_toggle();
});
download_back_but.addEventListener('click', () =>{
    are_u_sure_content.querySelector('#icons_cont').style.flexDirection = "row-reverse";
    are_u_sure_content.querySelector('#are_u_sure_text').innerText = 'Выгрузить данные на сервер?';
    download = 'download_back';
    are_u_sure_toggle();
});

open_keybrd_but.addEventListener('click', items_keybrd_open);
close_item_cont_but_2.addEventListener('click', items_cont_close);
search_sort_but_2.addEventListener('click', items_sort_swap);

del_item_input_but.addEventListener('click', del_items_input);
item_search_cont.addEventListener('click', items_keybrd_open);
search_sort_but.addEventListener('click', items_sort_swap);
close_item_cont_but.addEventListener('click', items_cont_close);
close_keybrd_but.addEventListener('click', items_keybrd_close);

session_but.addEventListener('click', sessions_cont_toggle);

session_power_but.addEventListener('click', address_chose_toggle);
cancel_but_address.addEventListener('click', address_chose_toggle);

ok_but.addEventListener('click', sess_num_confirm);

fire_but.addEventListener('click', full_reset);
// fire_but.addEventListener('click', installing);

no_but.addEventListener('click', are_u_sure_toggle);
yes_but.addEventListener('click', () =>{
    if (download == 'download') {
        are_u_sure_toggle();
        setTimeout(data_downloading, 300);
    }else if (download == 'download_back') {
        are_u_sure_toggle();
        setTimeout(downloading_back_act, 300);
    }else are_u_sure_toggle();
});

const doc = document.documentElement;

let today = new Date().toLocaleDateString();
let sess_info_list = false;
let docs_list = [];
let sess_num;
let last_op_doc = false;
let search_val = '';
let is_file = false;

let docs_count = 0;

let audio_on = true;

let pick = new Audio('../audio/pick.mp3');
let success = new Audio('../audio/success.mp3');
let warning = new Audio('../audio/warning.mp3');
let tap = new Audio('../audio/tap.mp3');
let del = new Audio('../audio/delete.mp3');
// let error = new Audio('../audio/error.mp3');



// For easy working ----------
const Moz = navigator.userAgent.includes('Mozilla/5.0 (iPhone');
const fMode = {exact: "environment"};
// const fMode = {exact: "user"};

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('sess_info')){
        sess_info_list = JSON.parse(localStorage.getItem('sess_info'));
        // console.log(sess_info_list);
        session_record();
    };
    
    // localStorage.removeItem('docs_list');
    if (localStorage.getItem('docs_list')) {
        // console.log(docs_list);
        docs_list = JSON.parse(localStorage.getItem('docs_list'));
        docs_list.forEach(el => {
            add_doc(el);
        });
    };
    if (localStorage.getItem('last_opened_doc')){
        last_op_doc = JSON.parse(localStorage.getItem('last_opened_doc'));
        back_but.classList.add('active');
    };
    // if (Moz) session_blur.style.backgroundColor = '#ebf4ff65';

    // if (docs_cont_content.querySelector('a')) 
    //     docs_cont_content.querySelector('a').click();


    reload_but.classList.add('light');
    setTimeout(() => {reload_but.classList.remove('light')}, 1000);
}); 

const options = {
    video: {
    width: 1355, //height
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
    // if (input.value == '1') {
        // input_blur();
        // Quagga.pause();
        // info_block.style.display = 'flex';
        // stream_cont.style.display = 'none';
        // video.classList.remove('camera_on');
        // scan_icon.classList.remove('camera_on');

        const file_id = last_op_doc;
        let file_list = JSON.parse(localStorage.getItem(`${file_id}`));
        
        const quant_val = file_list.length;
        const price_val = 1.25;
        const edit_time = (new Date()).toLocaleString();
        
        file_list.push({
            'name': `Тест ${quant_val}`,
            'code': '123456789',
            'price': price_val,
            'quant': 0
        });
        // console.log(file_list);

        // Doc full info updating
        const sum_val = file_list[0]['sum'] + price_val;
        file_list[0]['sum'] = sum_val;
        file_list[0]['itms_quant'] = quant_val;
        file_list[0]['edit'] = edit_time;

        // Doc lit info updating
        for (const doc of docs_list) {
            if(doc['id'] == file_id) {
                doc['sum'] = sum_val;
                doc['itms_quant'] = quant_val;
                break;
            };
        };

        localStorage.setItem(`${file_id}`, JSON.stringify(file_list));
        localStorage.setItem('docs_list', JSON.stringify(docs_list));
        const full_doc = docs_cont_content.querySelector(`#${file_id}`);
        full_doc.querySelector('#doc_sum p').innerText = sum_val;
        full_doc.querySelector('#doc_count p').innerText = quant_val;
        file_list = false;
    // };
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

function full_reset(){
    localStorage.clear();
    window.location.reload();
};

function docs_cont_scroll() {
    if (!header.classList.contains('turn_off')){
        docs_cont_content.scrollTo({top: 0, behavior: "smooth"});
    };
};

function sess_but_no_activ(){
    session_but.classList.remove('no_active');
        if (sess_info_list) {
            session_record();
        }else {
            no_session_act();
        };
};

function header_toggle(){

    info_block.style.display = 'none';
    // main_block.classList.remove('toggle');

    menue_but.classList.toggle('toggle');
    back_but.classList.toggle('toggle');
    help_but.classList.toggle('toggle');
    big_eye_but.classList.toggle('toggle');
    header.classList.toggle('turn_off');
    water_tag.classList.toggle('turn_on');

    docs_cont_scroll();
    sess_but_no_activ();

    // input_blur();
    main_block.classList.toggle('toggle');
    input_block.classList.toggle('toggle');

    setTimeout(() => {menue_content.classList.toggle('toggle')}, 10);
};

function no_session_act(){
    session_but.classList.remove('active');
    session_power_but.classList.remove('active');
    store_name_lit.classList.remove('active');
    sess_info_list = false;
    session_but.innerText = 'нет сессии';
    session_text.innerHTML= 'Подключиться<br> к сессии';
    localStorage.removeItem('sess_info');
};

function doc_name_insert(doc_n){
    // console.log('yea')
    session_but.innerText = doc_n;
    session_but.classList.add('no_active');
};

function return_to_doc(){
    doc_id = last_op_doc;
    for (const doc of docs_list) {
        if(doc['id'] == doc_id) {
            docs_opening(doc);
            break;
        };
    };
};


function check_activ(){
    check.classList.add('active');
    docs_cont_content.classList.add('check_blur');
    success.currentTime = 0;
    success.play();
    setTimeout(() => {
        check.classList.remove('active')
        docs_cont_content.classList.remove('check_blur')
    }, 1600);
};

function are_u_sure_toggle(){
    header.classList.toggle('turn_off');
    foot_cont.classList.toggle('turn_off');
    are_u_sure_cont.classList.toggle('toggle');
    setTimeout(() => {are_u_sure_content.classList.toggle('toggle')}, 10);
};

function warning_sound(){
    warning.currentTime = 0;
    warning.volume = 0.5;
    warning.play();
};

function data_downloading(){
    if (!sess_info_list){
        setTimeout(() => {
            warning_sound();
            sessions_cont_toggle();
        }, 10);
    }else {
        check.querySelector('span').innerHTML = 'Данные загружены <br>с сервера';
        check_activ();
    };
};

function downloading_back_act(){
    if (docs_count != 0) {
        if (!sess_info_list){
            setTimeout(() => {
                warning_sound();
                sessions_cont_toggle();
            }, 10);
        }else {
            data_downloading_back();
        };
    }else {
        warning_sound();
        docs_not_found.classList.add('select');
        setTimeout(() => {docs_not_found.classList.remove('select')}, 900);
    };
};

function data_downloading_back(){
    check.querySelector('span').innerHTML = 'Данные выгружены <br>на сервер';
    check_activ();

    localStorage.removeItem('last_opened_doc');
    last_op_doc = false;
    back_but.classList.remove('active');

    // Docs removing
    li_list = docs_cont_content.querySelectorAll('li');
    
    win_height = docs_cont.clientHeight;
    // console.log(win_height);
    docs_cont.style.minHeight = `${win_height}px`;
    docs_cont.style.maxHeight = `${win_height}px`;
    // docs_cont.style.justifyContent = 'center';
    
    setTimeout(() => {
        li_list.forEach((el) =>{
                el.classList.add('opac');
                localStorage.removeItem(`${el['id']}`)
                setTimeout(() => {el.remove()}, 500);
        });
        docs_list = [];
        localStorage.removeItem('docs_list');
        
    }, 300);

    setTimeout(() => {
        docs_cont.classList.add('download_height');
        setTimeout(() => {
            docs_cont.style.minHeight = `13rem`;
            docs_cont.style.maxHeight = `55%`;
            docs_cont.classList.remove('download_height');
        },460);
    }, 1600);
};

function sessions_cont_toggle(){
    session_nav_cont.classList.toggle('toggle');
    setTimeout(() => {session_nav_content.classList.toggle('toggle')}, 20);
};


function address_chose_toggle(){
    if(!sess_info_list){
        header.classList.toggle('turn_off');
        foot_cont.classList.toggle('turn_off');
        store_address_cont.classList.toggle('toggle');
        setTimeout(() => {store_address_content.classList.toggle('toggle')}, 10);
    }else {
        sess_start_stop()
    };
};

function sess_start_stop(address_name = false){
    if(!sess_info_list){
        header.classList.toggle('turn_off');
        foot_cont.classList.toggle('turn_off');
        store_name.innerText = address_name;
        address_chose_toggle();
        ur_session_num_cont.classList.add('toggle');
        setTimeout(() => {session_num_content.classList.add('toggle')}, 10);
        sessions_cont_toggle();

        sess_num = session_num.innerText;
        sess_info_list = {
                        "sess_n" : `${today}-${sess_num}`,
                        "store_n" : address_name
                        };
    }else {
        no_session_act();
    };
};

function sess_num_confirm(){
    ur_session_num_cont.classList.remove('toggle');
    session_num_content.classList.remove('toggle');

    header.classList.remove('turn_off');
    foot_cont.classList.remove('turn_off');

    session_record();
    setTimeout(data_downloading, 500);
};

function session_record(){
    session_but.innerText = sess_info_list['sess_n'];
    store_name_lit.innerText = sess_info_list['store_n'];
    session_but.classList.add('active');
    session_power_but.classList.add('active');
    store_name_lit.classList.add('active');
    session_text.innerHTML = 'Отключиться<br> от сессии:';
    localStorage.setItem('sess_info', JSON.stringify(sess_info_list));
};


function docs_types_toggle(){
    header.classList.toggle('turn_off');
    foot_cont.classList.toggle('turn_off');
    doc_types_cont.classList.toggle('toggle');
    setTimeout(() => {doc_types_content.classList.toggle('toggle')}, 10);
};

function add_doc(new_el){
    docs_cont_content.insertAdjacentHTML('afterbegin', `
            <li id="${new_el['id']}" class="${new_el['class_name']}">
                <span id="doc_icon">
                    <i class="fa-solid fa-file"></i>
                </span>
                <div id="d_info" class="cont">
                    <h2>${new_el['text_name']}</h2>
                    <span id="doc_sum" class="doc_lit_info">Сумма:
                        <p>${new_el['sum']}</p>
                        <span>р.</span>
                    </span>
                    <span id="doc_count" class="doc_lit_info">Колич.:
                        <p>${new_el['itms_quant']}</p>
                        <span>эл.</span>
                    </span>
                </div>
                <a>
                    <i class="fa-solid fa-eye"></i>
                </a>
                <button>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </li>
    `);
};

function add_item(item){
    if ('name' in item){
        i_name = item['name'];
        // console.log(i_name);
        if (i_name.length > 27) i_name = i_name.sclice(0, 27);
        items_list_cont_content.insertAdjacentHTML('afterbegin', `
            <li>
                <div id="left_side_cont" class="cont">
                    <span id="items_name">${i_name}</span>
                    <div id="barcode_price_cont" class="cont">
                        <span id="items_barcode">1234567891234</span>
                        <div class="cont">
                            <span id="items_price_icon">
                                <i class="fa-solid fa-coins"></i>
                            </span>
                            <span id="items_price">1.25</span>
                            <p>р.</p>
                        </div>
                    </div>
                </div>
                <a id="items_quantity">0</a>
            </li>
        `);
    };
};

function doc_info_inserting(info){
    doc_name.innerText = info['doc_name'];
    doc_items_sum.innerText = info['sum'];
    doc_items_quantity.innerText = info['itms_quant'];
    doc_create_time.innerText = info['create'];
    doc_edit_time.innerText = info['edit'];
};

function docs_opening(doc_data){
    // console.log(doc_data);
    if (doc_data['class_name'] == 'inv'){
        // console.log(doc_data['text_name']);
        header_toggle();
        doc_name_insert(doc_data['text_name']);
        last_op_doc = doc_data['id'];
        localStorage.setItem('last_opened_doc', JSON.stringify(last_op_doc));
        back_but.classList.add('active');

        if (!localStorage.getItem(`${doc_data['id']}`)){
            const create_time = (new Date()).toLocaleString();
            // console.log(create_time);
            localStorage.setItem(`${doc_data['id']}`, JSON.stringify([{
                'doc_name': `${doc_data['text_name']}`,
                'sum': 0,
                'itms_quant': 0,
                'create': create_time,
                'edit': create_time
            }]));
        };
    };
};

document.addEventListener('click', (event) => {
    if (session_nav_cont.classList.contains('toggle')){
        const sessions_cont_inside = event.composedPath().includes(session_nav_cont);
        const session_but_inside = event.composedPath().includes(session_but);
        // console.log(sessions_cont_inside);
        // console.log(session_but_inside);

        if (!sessions_cont_inside && !session_but_inside ) { 
            session_nav_cont.classList.remove('toggle');
            session_nav_content.classList.remove('toggle');
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

function items_cont_open(file_name) {
    items_keybrd_open();
    items_cont.classList.add('toggle');
    header.classList.add('turn_off');
    foot_cont.classList.add('turn_off');
    items_list_cont_content.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(() => {
        items_content.classList.add('toggle');
    }, 80);

    if (localStorage.getItem(`${file_name}`)){
        file_list = JSON.parse(localStorage.getItem(`${file_name}`));
        // console.log(file_list);
        if (!file_list[1]) items_not_found.style.display = 'flex';
        else items_not_found.style.display = 'none';

        doc_info_inserting(file_list[0]);
        file_list.forEach(el => {
            add_item(el);
        });
        // for (let el = 1; el < 51; el++){
        //     add_item(file_list[el]);
            // console.log(file_list[el])
        // };ы
        file_list = false;
    };
};

function items_keybrd_close(){
    items_keybrd_cont.classList.add('toggle');
    items_list_cont.classList.add('keybrd_close');
};

function items_keybrd_open(){
    items_keybrd_cont.classList.remove('toggle');
    items_list_cont.classList.remove('keybrd_close');
};

function items_cont_close() {
    items_cont.classList.remove('toggle');
    foot_cont.classList.remove('turn_off');
    sess_but_no_activ();
    header.classList.remove('turn_off');
    
    if (is_file) {
        return_to_doc();
    };

    items_content.classList.remove('toggle');
    search_val_clear();
    items_list_cont_content.replaceChildren();
    search_type_icon.classList.remove('toggle');
    search_sort_but.classList.remove('toggle');
    items_list_cont_content.classList.remove('reverse');
};

function items_sort_swap(){
    search_sort_but.classList.toggle('toggle');
    search_sort_but_2.classList.toggle('toggle');
    const scrollsize = items_list_cont_content.scrollHeight - items_list_cont_content.clientHeight;

    setTimeout(() => {
        if (scrollsize != 0){
            items_list_cont_content.classList.toggle('reverse');
            // console.log(scrollsize);
            items_list_cont_content.scrollTo({top: -scrollsize, behavior: "instant"});
        };
    }, 340);
};

function del_items_input(){
    // console.log(search_val);
    if (search_val){
        tap.currentTime = 0;
        tap.play();
        search_val = item_search_input.innerText = item_search_input.innerText.slice(0, -1);
        if (!search_val) search_val_clear();
    };
    if (search_val.includes('.')) search_type_icon.classList.add('toggle')
    else search_type_icon.classList.remove('toggle');
};

function search_val_clear(){
    item_search_input.classList.remove('not_place_hold');
    item_search_input.innerText = 'Поиск по документу';
    search_val = '';
};

items_list_cont_content.addEventListener('scroll', () => {
    const scrolltop = items_list_cont_content.scrollTop;
    // console.log(-scrolltop);
    // const offsetHeight = items_list_cont_content.offsetHeight;
    const scrollbottom = items_list_cont_content.scrollHeight - items_list_cont_content.clientHeight;
    // console.log(scrollbottom);

    // setTimeout(() => {
    //     const scrolltop_2 = items_list_cont_content.scrollTop;
    //     // console.log(scrolltop_2);
    //     if (scrolltop_2 > scrolltop + 200){
    //         items_keybrd_close();
    //     };
    // }, 200);
    if (items_list_cont_content.classList.contains('reverse')){
        scroll_size = scrollbottom + scrolltop - 0.66
    } else scroll_size = scrolltop;

    // console.log(scroll_size);

    if (scroll_size < 45) {
        doc_full_info_cont.classList.remove('turn_off');
        // if (scroll_size < 5) items_keybrd_open();
    }else {
        doc_full_info_cont.classList.add('turn_off');
    };
});

items_keybrd_cont_left.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON' && search_val.length < 13 
        && e.target.id != 'search_sort_but'){
        tap.currentTime = 0;
        tap.play();
        if (e.target.id != 'point_but'){
            if (!search_val) item_search_input.innerText = '';
            item_search_input.classList.add('not_place_hold');
            search_val = item_search_input.innerText = item_search_input.innerText + `${e.target.innerText}`;
            // console.log(search_val);
        }else {
            if (search_val && !search_val.includes('.')){
                search_val = item_search_input.innerText = item_search_input.innerText + `.`;
                // console.log(search_val);
            };
        };
        if (search_val.includes('.')) search_type_icon.classList.add('toggle')
        else search_type_icon.classList.remove('toggle');
    };
});

// item_search_input.addEventListener('input', (e) => {
//     const scrollsize = items_list_cont_content.scrollHeight - items_list_cont_content.clientHeight;
//     items_list_cont_content.scrollTo({top: -scrollsize, behavior: "instant"});

    // const all_items = items_list_cont_content.querySelectorAll('li');
    // const val = item_search_input.value;
    // // console.log(val);
    // if (val != ''){
    //     // console.log(item_search_input.value);
    //     all_items.forEach(el => {
    //         const i_name = el.querySelector('span');
    //         // console.log(i_name.innerText);
    //         if (i_name.innerText.search(val) == -1) {
    //             el.classList.add('hide');
    //         }else {
    //             console.log(i_name.innerText);
    //             el.classList.remove('hide');
    //         };
    //     });
    // }else all_items.forEach(el => {
    //     el.classList.remove('hide');
    // });
// });

// Del holder
del_item_input_but.addEventListener('touchstart', (e) => {
    let timeout;
    let value = false;
    timeout = setTimeout(() => {
        value = true;
    }, 300);
    setTimeout(() => {
        if (value) {
            del.currentTime = 0;
            del.play();
            search_val_clear();
            del_item_input_but.classList.add('hold');
            setTimeout(() => {
                del_item_input_but.classList.remove('hold');
            }, 400);
        };
    }, 300);
    e.target.addEventListener('touchend', () => {
        if (timeout) clearTimeout(timeout);
    });
});

docs_cont_content.addEventListener('touchstart', (e) => {
    const e_id = e.target.getAttribute('id');
    if (!e_id || e_id == 'docs_cont_content') return;  // preventEvent
    // console.log(e_id);

    // Swiping doc
    let posX = e.changedTouches[0].clientX;
    let swipe = 200;
    
    let timeout;
    e.target.addEventListener('touchmove', (event) => {
        event.changedTouches[0].clientX - posX > swipe && swipeRight();
    });
    
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

docs_cont_content.addEventListener('click', (e) => {
    // e.stopPropagation();
    let full_doc;
    const tag = e.target.tagName;
    // console.log(e.target);

    if (tag == 'LI') {
        for (const el of docs_list) {
            if (el['id'] == e.target.getAttribute('id')) {
                docs_opening(el);
                break;
            };
        };
    };

    // Doc check / Eye
    if (tag == 'A') {
        full_doc = e.target.parentNode;
        full_doc_id = full_doc.getAttribute('id');
        if (localStorage.getItem(`${full_doc_id}`)) {
            items_cont_open(full_doc_id);
            is_file = false;
            // const doc_n = full_doc.querySelector('h2').innerText;
            // doc_name_insert(doc_n);
        };
        // console.log(full_doc_id);
    };

    // Trash
    if (tag == 'BUTTON'){
        full_doc = e.target.parentNode;
        const e_id = full_doc.getAttribute('id');
        // console.log(e_id);

        if (last_op_doc) {
            if (e_id == last_op_doc){
                localStorage.removeItem('last_opened_doc');
                last_op_doc = false;
                back_but.classList.remove('active');
            };
        };

        full_doc.classList.add('deleting');
        setTimeout(() => {full_doc.remove()}, 400);

        if (localStorage.getItem(`${e_id}`)){
            localStorage.removeItem(`${e_id}`);
        };
        
        for (const el of docs_list) {
            if (el['id'] == e_id) {
                const num_of_el = docs_list.indexOf(el);
                docs_list.splice(num_of_el, 1)
                localStorage.setItem('docs_list', JSON.stringify(docs_list));
                break;
            };
        };
    };
});

store_address_content.addEventListener('click', (e) => {
    e.preventDefault();
    // e.stopPropagation();
    // const id = e.target.getAttribute('id');
    const tag = e.target.tagName;
    const address_name = e.target.innerText;
    // console.log(tag);
    if (tag == 'A') sess_start_stop(address_name);
});

doc_types_content.addEventListener('click', (e) => {
    e.preventDefault();
    // const id = e.target.getAttribute('id');
    const class_name = e.target.classList[0];
    const text_name = e.target.innerText;
    const tag = e.target.tagName;
    // let new_text_name = false;
    // console.log(class_name, text_name, tag);

    if(tag == 'A'){

        // Docs counter
        let new_el = {
            'id': class_name + '_1', 
            'class_name': class_name, 
            'text_name': text_name + ' 1',
            'sum': 0,
            'itms_quant': 0
        };
        let max_count_list = [];
        if (localStorage.getItem('docs_list')){
            // console.log(docs_list);
            docs_list.forEach(el => {
                if (el['class_name'] == new_el['class_name']){
                    max_count_list.push(parseInt(el['id'].split('_')[1]));
                };
            });
            if (max_count_list.length > 0) {
                const max_num = parseInt(Math.max.apply(null, max_count_list)) + 1;
                new_id = `${class_name}_${max_num}`;
                new_text_name = `${text_name} ${max_num}`;
                new_el["id"] = new_id;
                // console.log(new_text_name.replace(' -', '-'))
                new_el["text_name"] = new_text_name;
            };
        };
        docs_list.push(new_el);
        localStorage.setItem('docs_list', JSON.stringify(docs_list));

        add_doc(new_el);
        docs_opening(new_el);
        docs_types_toggle();
    };

});

// Docs_cont handling
docs_cont_content.addEventListener('DOMSubtreeModified', (e) =>{
    docs_count = docs_cont_content.getElementsByTagName('li').length;
    // console.log(docs_count);
    if (docs_count == 0) {
        // console.log('= 0');
        swipe_icon.classList.remove('toggle');
        docs_not_found.classList.remove('no_active');
        localStorage.removeItem('docs_list');
    }else if (docs_count == 1) {
        // console.log('= 1');
        swipe_icon.classList.add('toggle');
        docs_not_found.classList.add('no_active');
    }else if (docs_count == 2) {
        // console.log('= 2');
        docs_cont_content.style.justifyContent = 'center';
        docs_cont.style.justifyContent = 'center';
        // docs_cont_content.style.overflowY = 'hidden';
    }else if (docs_count > 2){
        // console.log('> 2');
        docs_cont.style.justifyContent = 'flex-start';
        docs_cont_content.style.justifyContent = 'flex-start';
    };
});

////////////////////////////////////////////////////////////////////////////////
// Не работает
// window.addEventListener('blur', () => {
//     video.classList.remove('active');
//     Quagga.pause();
//     video.classList.remove('camera_on');
//     scan_icon.classList.remove('camera_on');
// });
////////////////////////////////////////////////////////////////////////////

// Label installing for Android
// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI notify the user they can install the PWA
//   showInstallPromotion();
//   // Optionally, send analytics event that PWA install promo was shown.
//   console.log(`'beforeinstallprompt' event was fired.`);
// });

// function showInstallPromotion(){
//     install_notif = document.getElementById('install_notif');
//     install_notif.classList.add('active');
//     setTimeout(() => {install_but.classList.remove('active'), 500});
// };

// async function installing (){
//   // Show the install prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   const { outcome } = await deferredPrompt.userChoice;
//   // Optionally, send analytics event with outcome of user choice
//   console.log(`User response to the install prompt: ${outcome}`);
//   // We've used the prompt, and can't use it again, throw it away
//   deferredPrompt = null;
// };

function input_focus(){
    // input_block.style.paddingBottom = "10vh";
    // main_container.style.justifyContent = 'flex-end';

    // else input_block.style.paddingBottom = '50vh';
    // main_container.style.justifyContent = 'flex-end';
    main_block.classList.remove('toggle');
    water_tag.style.display = 'none';
    foot_cont.style.display = 'none';
    // window.scrollTo({bottom: 0, behavior: "smooth"});
    window.scrollTo({bottom: 0, behavior: "smooth"});
};

function input_blur(){

    // input_block.style.paddingBottom = "5vh";
    // main_container.style.justifyContent = 'center';

    main_block.classList.add('toggle');
    foot_cont.style.display = 'flex';
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
            return;
        }
        Quagga.start();
    });

    Quagga.onDetected((result) => {
        if (audio_on) {
            pick.currentTime = 0;
            pick.play();
        };
        Quagga.pause();
        const code = result.codeResult.code;
        request(code);
    });
};