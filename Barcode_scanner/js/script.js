
let video = document.querySelector('video');
let camera_button = document.querySelector('button');
let input = document.querySelector('input');
let input_zone = document.querySelector('.input_zone');


// console.log(devices)
// navigator.mediaDevices.enumerateDevices().then(devices =>{console.log(devices)});

camera_button.addEventListener('click', camera_access);

let options = {
    video: {
    facingMode: {exact: "environment"},
    width: 1280,
    height: 720
    }
};

function camera_access(){
    // запрашиваем доступ к веб-камере
    if (!video.classList.contains('active')){
        if       (navigator.getUserMedia!=null) {
                  navigator.getUserMedia(options, getStream, noStream);
                  open_camera();
        }else if (navigator.webkitGetUserMedia!=null){
                  navigator.webkitGetUserMedia(options, getStream, noStream);
                  open_camera();
        }else if (navigator.mozGetUserMedia!=null){
                  navigator.mozGetUserMedia(options, getStream, noStream);
                  open_camera();
        }else if (navigator.msUserMedia!=null){
                  navigator.msGetUserMedia(options, getStream, noStream);
                  open_camera();
        }else alert("Камера не найдена");
    }else toggle_camera(); 
};

function open_camera(){
    video.classList.add('active');
    video.classList.add('camera_on');
    input_zone.classList.add('camera_on');
    input.classList.add('camera_on');
};

function toggle_camera(){
    input_zone.classList.toggle('camera_on');
    input.classList.toggle('camera_on');
    video.classList.toggle('camera_on');
};

function getStream(stream){
    // video.src = window.webkitURL.createObjectURL(stream);
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.play();
    };
};  

function noStream(e){
    setTimeout((e) => {alert("Вы не дали доступ к камере");
    input_zone.classList.remove('camera_on');
    input.classList.remove('camera_on');
    video.classList.remove('camera_on');
    video.classList.remove('active');}, 800);
};

input.addEventListener('keydown', (event) => {
	if (['Escape', 'Delete', 'Tab', 'Backspace', 'Home', 'End', 'ArrowLeft', 'ArrowRight','1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
		return;
	} else event.preventDefault();
});

input.onfocus = () => {
    video.style.display = 'none';
    if (video.classList.contains('included')) 
        input_zone.style.top = '10vh';
};
input.onblur = () => {
    video.style.display = 'inline';
    if (video.classList.contains('included'))
        input_zone.style.top = '4vh' ;
};