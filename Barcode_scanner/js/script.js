
const main_container = document.getElementById('main_container');

//--------------
const ur_session_num_cont = document.getElementById('ur_session_num_cont');
const session_num_content = document.getElementById('session_num_content');
const sess_info_cont = document.getElementById('sess_info_cont');
const ok_but = session_num_content.querySelector('#ok_but');

//--------------

const store_address_cont = document.getElementById('store_address_cont');
const store_address_content = document.getElementById('store_address_content');
const cancel_but_address = document.getElementById('cancel_but_address');

//--------------
const foot_cont = document.getElementById('foot_cont');
const help_but = document.getElementById('help_but');
const big_eye_but = document.getElementById('big_eye_but');
const session_but = document.getElementById('session_but');
const session_nav_cont = document.getElementById('session_nav_cont');
const session_nav_content = document.getElementById('session_nav_content');
const session_power_but = document.getElementById('session_power_but');
const session_text = document.getElementById('session_text');
const store_name_lit = document.getElementById('store_name_lit');

// const menue_head_cont = document.getElementById('menue_head_cont');
const fire_but = document.getElementById('fire_but');
const reload_but = document.getElementById('reload_but');
const item_search_input = document.getElementById('item_search_input');
const clear_item_search_but = document.getElementById('clear_item_search_but');
const item_search_but = item_search_cont.querySelector('#item_search_but');

const menue_but = document.getElementById('menue_but');
const back_but = document.getElementById('back_but');

//--------------

const header = document.querySelector('header');
const menue_content = document.getElementById('menue_content');

const docs_cont = document.getElementById('docs_cont');
const docs_cont_content = document.getElementById('docs_cont_content');
const swipe_icon = docs_cont_content.querySelector('#swipe_icon');
const docs_not_found = document.getElementById('docs_not_found');

const are_u_sure_cont = document.getElementById('are_u_sure_cont');
const are_u_sure_content = document.getElementById('are_u_sure_content');
const no_but = are_u_sure_cont.querySelector('#no_but');
const yes_but = are_u_sure_cont.querySelector('#yes_but');

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

const items_cont = document.getElementById('items_cont');
const items_content = items_cont.querySelector('#items_content');
const search_type_cont = items_cont.querySelector('#search_type_cont');
const search_sort_cont = items_cont.querySelector('#search_sort_cont');
const doc_full_info_cont = items_cont.querySelector('#doc_full_info_cont');
const items_list_cont_content = items_cont.querySelector('#items_list_cont_content');
const cancel_but_item_search = items_cont.querySelector('#cancel_but_item_search');

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
reload_but.addEventListener('click', refresh);

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

cancel_but_item_search.addEventListener('click', items_cont_close);
clear_item_search_but.addEventListener('click', () => {
    item_search_input.value = '';
    item_search_input.focus();
});
item_search_but.addEventListener('click', () => {item_search_input.blur()});
search_sort_cont.addEventListener('click', items_sort_swap);
search_type_cont.addEventListener('click', search_type_swap);


session_but.addEventListener('click', sessions_cont_toggle);

session_power_but.addEventListener('click', address_chose_toggle);
cancel_but_address.addEventListener('click', address_chose_toggle);

ok_but.addEventListener('click', sess_num_confirm);

fire_but.addEventListener('click', full_reset);
// fire_but.addEventListener('click', installing);

no_but.addEventListener('click', () =>{
    are_u_sure_toggle();
});
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

let docs_count = 0;

let audio_on = true;

let pick = new Audio('../audio/pick.mp3');
let success = new Audio('../audio/success.mp3');
let warning = new Audio('../audio/warning.mp3');
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
    // if (Moz) session_blur.style.backgroundColor = '#ebf4ff65';

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
    if (input.value == '1') {
        input_blur();
        Quagga.pause();
        info_block.style.display = 'flex';
        stream_cont.style.display = 'none';
        video.classList.remove('camera_on');
        scan_icon.classList.remove('camera_on');

        let file_id = JSON.parse(localStorage.getItem('last_opened_doc'))['id'];
        file_list = JSON.parse(localStorage.getItem(`${file_id}`));
        
        let counter = 0;
        while (counter < 1000){
            file_list.push({
                'name' : 'Тест',
                'code' : '123456789',
            });
            counter += 1;
        };
        localStorage.setItem(`${file_id}`, JSON.stringify(file_list));
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

function full_reset(){
    localStorage.clear();
    window.location.reload();
};

function docs_cont_scroll() {
    if (!header.classList.contains('turn_off')){
        // console.log('Scroll');
        docs_cont_content.scrollTo({top: 0, behavior: "smooth"});
        session_but.classList.remove('no_active');
        if (sess_info_list) {
            session_record();
        }else {
            no_session_act();
        };
    };
};

function header_toggle(){
    menue_but.classList.toggle('toggle');
    back_but.classList.toggle('toggle');
    help_but.classList.toggle('toggle');
    big_eye_but.classList.toggle('toggle');
    header.classList.toggle('turn_off');
    water_tag.classList.toggle('turn_on');

    docs_cont_scroll();

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

function doc_name_insert(doc_name){
    // console.log('yea')
    session_but.innerText = doc_name;
    session_but.classList.add('no_active');
};

function return_to_doc(){
    docs_opening(JSON.parse(localStorage.getItem('last_opened_doc')));
};


function check_activ(){
    check.classList.add('active');
    docs_cont_content.classList.add('check_blur');
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

function data_downloading(){
    if (!sess_info_list){
        setTimeout(() => {
            warning.play();
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
                warning.play();
                sessions_cont_toggle();
            }, 10);
        }else {
            data_downloading_back();
        };
    }else {
        warning.play();
        docs_not_found.classList.add('select');
        setTimeout(() => {docs_not_found.classList.remove('select')}, 900);
    };
};

function data_downloading_back(){
    check.querySelector('span').innerHTML = 'Данные выгружены <br>на сервер';
    check_activ();
    back_but.classList.remove('active');
    localStorage.removeItem('last_opened_doc');

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
                        "store_n" : address_name,
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
                        <p>0</p>
                        <span>руб.</span>
                    </span>
                    <span id="doc_count" class="doc_lit_info">Колич.:
                        <p>0</p>
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
    items_list_cont_content.insertAdjacentHTML('afterbegin', `
        <li>
            <div id="left_side" class="cont">
                <span id="items_name">${item['name']}</span>
                <span id="items_barcode">${item['code']}</span>
            </div>
            <div id="right_side">
            </div>
        </li>
    `);
};

function docs_opening(doc_data){
    if (doc_data['class_name'] == 'scan'){
        // console.log(doc_data['text_name']);
        header_toggle();
        doc_name_insert(doc_data['text_name']);
        localStorage.setItem('last_opened_doc', JSON.stringify(doc_data));
        back_but.classList.add('active');

        localStorage.setItem(`${doc_data['id']}`, JSON.stringify([]));
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


item_search_input.addEventListener('keydown', (event) => {
    if (event.key == '-' || event.key == '.') event.preventDefault();
	if (['Escape', 'Delete', 'Tab', 'Backspace', 
         'Home', 'End', 'ArrowLeft', 'ArrowRight',
         '1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
	} else event.preventDefault();
});
item_search_input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') item_search_input.blur();
});

function items_cont_open(file_name) {
    items_cont.classList.add('toggle');
    header.classList.add('turn_off');
    foot_cont.classList.add('turn_off');
    items_list_cont_content.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(() => {
        item_search_input.focus();
        items_content.classList.add('toggle');
    }, 80);

    if (localStorage.getItem(`${file_name}`)){
        file_list = JSON.parse(localStorage.getItem(`${file_name}`));
        file_list.forEach(el => {
            add_item(el);
        });
        file_list = false;
    };
};

function items_cont_close() {
    header.classList.remove('turn_off');
    foot_cont.classList.remove('turn_off');
    items_cont.classList.remove('toggle');
    items_content.classList.remove('toggle');

    items_list_cont_content.replaceChildren();
    search_sort_cont.classList.remove('toggle');
    items_list_cont_content.classList.remove('reverse');
};

function items_sort_swap(){
    // console.log('search_sort_swap');
    search_sort_cont.classList.toggle('toggle');
    // item_search_input.focus();

    setTimeout(() => {
        items_list_cont_content.classList.toggle('reverse');
        const scrollsize = items_list_cont_content.scrollHeight - items_list_cont_content.clientHeight;
        // console.log(scrollsize);
        items_list_cont_content.scrollTo({top: -scrollsize, behavior: "instant"});
    }, 280);
};

function search_type_swap(){
    search_type_cont.classList.toggle('toggle');
    item_search_input.focus();
};

items_list_cont_content.addEventListener('scroll', () => {
    const scrolltop = items_list_cont_content.scrollTop;
    // console.log(-scrolltop);
    // const offsetHeight = items_list_cont_content.offsetHeight;
    const scrollbottom = items_list_cont_content.scrollHeight - items_list_cont_content.clientHeight;
    // console.log(scrollbottom);

    setTimeout(() => {
        const scrolltop_2 = items_list_cont_content.scrollTop;
        // console.log(scrolltop_2);
        if (scrolltop_2 > scrolltop + 150){
            item_search_input.blur();
        };
    }, 500);
    if (items_list_cont_content.classList.contains('reverse')){
        scroll_size = scrollbottom + scrolltop - 0.66
    } else scroll_size = scrolltop;

    console.log(scroll_size);

    if (scroll_size < 65) {
        doc_full_info_cont.classList.remove('turn_off');
        if (scroll_size < 5) item_search_input.focus();
    }else {
        doc_full_info_cont.classList.add('turn_off');
    };
    if (scroll_size + 30 > scrollbottom && scrollbottom) {
        items_list_cont_content.classList.add('end_light');
    }else {
        items_list_cont_content.classList.remove('end_light');
    };
});

item_search_input.addEventListener('input', (e) => {
    items_list_cont_content.scrollTo({top: -scrollsize, behavior: "instant"});
});

docs_cont_content.addEventListener('touchstart', (e) => {
    const e_id = e.target.getAttribute('id');
    if (!e_id || e_id == 'docs_cont_content') return;  // preventEvent
    // console.log(e_id);

    // Swiping doc
    let posX = e.changedTouches[0].clientX;
    let swipe = 200;
    
    let timeout
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
        docs_list.forEach(el=> {
            if (el['id'] == e.target.getAttribute('id')) docs_opening(el);
        });
    };

    // Doc check / Eye
    if (tag == 'A') {
        full_doc = e.target.parentNode;
        full_doc_id = full_doc.getAttribute('id');
        items_cont_open(full_doc_id);
        // doc_up_moving(full_doc);
        // doc_name = full_doc.querySelector('h2').innerText;
        // console.log(full_doc_id);
        // doc_name_insert(doc_name);
    };

    // Trash
    if (tag == 'BUTTON'){
        full_doc = e.target.parentNode;
        const e_id = full_doc.getAttribute('id');
        // console.log(e_id);

        if (localStorage.getItem('last_opened_doc')) {
            if (e_id == JSON.parse(localStorage.getItem('last_opened_doc'))['id']){
                back_but.classList.remove('active');
                localStorage.removeItem('last_opened_doc');
            };
        };

        full_doc.classList.add('deleting');
        setTimeout(() => {full_doc.remove()}, 400);


        docs_list.forEach((el) =>{
            if (el.id == e_id) {
                const num_of_el = docs_list.indexOf(el);
                docs_list.splice(num_of_el, 1)
                localStorage.setItem('docs_list', JSON.stringify(docs_list));
                return
            };
        });

        if (localStorage.getItem(`${e_id}`)){
            localStorage.removeItem(`${e_id}`);
        };
        // console.log(num_of_el);
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
        let new_el = {"id": class_name + '_1', "class_name": class_name, "text_name": text_name + ' 1'};
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
    main_block.style.display = 'none';
    water_tag.style.display = 'none';
    foot_cont.style.display = 'none';
    // window.scrollTo({bottom: 0, behavior: "smooth"});
    window.scrollTo({bottom: 0, behavior: "smooth"});
};

function input_blur(){

    // input_block.style.paddingBottom = "5vh";
    // main_container.style.justifyContent = 'center';

    main_block.style.display = 'flex';
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
            return
        }
        Quagga.start();
    });

    Quagga.onDetected((result) => {
        if (audio_on) pick.play();
        Quagga.pause();
        const code = result.codeResult.code;
        request(code);
    });
};