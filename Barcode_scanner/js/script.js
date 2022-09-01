
let video = document.querySelector('video');
let camera_button = document.querySelector('button');
let cover_img = document.querySelector('.cover');
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
        if (navigator.getUserMedia!=null) {
            navigator.getUserMedia(options, getStream, noStream);
            video.classList.add('active');
        }else if (navigator.webkitGetUserMedia!=null){
                  navigator.webkitGetUserMedia(options, getStream, noStream);
                  video.classList.add('active');
        }else if (navigator.mozGetUserMedia!=null){
                  navigator.mozGetUserMedia(options, getStream, noStream);
                  video.classList.add('active');
        }else if (navigator.msUserMedia!=null){
                  navigator.msGetUserMedia(options, getStream, noStream);
                  video.classList.add('active');
        }else alert("Камера не найдена");
    }else cover_img.classList.toggle('active');
};

function getStream(stream){
    // video.src = window.webkitURL.createObjectURL(stream);
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.play();
    };
};  

function noStream(e){
    alert("Вы не дали доступ к камере");
};

input.addEventListener('keydown', (event) => {
	if (['Escape', 'Delete', 'Tab', 'Backspace', 'Home', 'End', 'ArrowLeft', 'ArrowRight','1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
		return;
	} else event.preventDefault();
});

input.onfocus = () => {
    cover_img.style.display = 'none';
    video.style.display = 'none';
    input_zone.style.top = '10vh' 
};
input.onblur = () => {
    cover_img.style.display = 'inline';
    video.style.display = 'inline';
    input_zone.style.top = '4vh' 
};