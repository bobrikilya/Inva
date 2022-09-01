
let video = document.querySelector('video');
let camera_button = document.querySelector('button');
let cover_img = document.querySelector('.cover');
let input = document.querySelector('input');

// console.log(devices)
// navigator.mediaDevices.enumerateDevices().then(devices =>{console.log(devices)});

camera_button.addEventListener('click', camera_access);

let options = {
    video: {
    width: 1280,
    height: 720
    }
};

function camera_access(){
    if (!video.classList.contains('active')){
        if(navigator.webkitGetUserMedia!=null) { 
            // запрашиваем доступ к веб-камере
            navigator.webkitGetUserMedia(options, getStream, noStream);    
        }else alert("Камера не найдена");
        video.classList.add('active');
    }else cover_img.classList.toggle('active');
};

function getStream(stream){
    // video.src = window.webkitURL.createObjectURL(stream);
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.play();
    };
};  

function noStream(fail){
    alert("Вы не дали доступ к камере");
};

input.addEventListener('keydown', (event) => {
	if (['Escape', 'Delete', 'Tab', 'Backspace', 'Home', 'End', 'ArrowLeft', 'ArrowRight','1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
		return;
	} else event.preventDefault();
});