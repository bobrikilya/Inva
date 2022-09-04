
let video = document.querySelector('video');
let camera_button = document.querySelector('.camera');
let search_button = document.querySelector('.search');
let clear_button = document.querySelector('.clear');
let input = document.querySelector('input');
let input_zone = document.querySelector('.input_zone');


camera_button.addEventListener('click', camera_access);
clear_button.addEventListener('click', inpute_cleaning);


let options = {
    video: {
    // facingMode: {exact: "environment"},
    width: 1350,
    height: 1280
    }
};

// Camera access request
function camera_access(){
    if (!video.classList.contains('active')){
        if       (navigator.getUserMedia!=null) {
                  navigator.getUserMedia(options, getStream, noStream);
                  open_camera();
        // Chrome    
        }else if (navigator.webkitGetUserMedia!=null){
                  navigator.webkitGetUserMedia(options, getStream, noStream);
                  open_camera();
        // Firefox
        }else if (navigator.mozGetUserMedia!=null){
                  navigator.mozGetUserMedia(options, getStream, noStream);
                  open_camera();
        // Other
        }else if (navigator.msUserMedia!=null){
                  navigator.msGetUserMedia(options, getStream, noStream);
                  open_camera();

        }else alert("Камера не найдена");
    }else toggle_camera(); 
};

function getStream(stream){
    // video.src = window.webkitURL.createObjectURL(stream);
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.play();
    };
};

function noStream(){
    setTimeout(() => {alert("Вы не дали доступ к камере");
    input_zone.classList.remove('camera_on');
    input.classList.remove('camera_on');
    video.classList.remove('camera_on');
    video.classList.remove('active');}, 800);
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


function inpute_cleaning(){
    input.value = ''
    setTimeout(() => {
        search_button.classList.remove('clear_on');
        clear_button.classList.remove('clear_on');
    }, 200);
    input.focus();
};
// Number filter
input.addEventListener('keydown', (event) => {
    if (event.key == '-' || event.key == '.') event.preventDefault();
    // if (input.value.length >= 17 &&
    //     ['1','2','3','4','5','6','7','8','9','0'].includes(event.key)) 
    //     event.preventDefault();
	if (['Escape', 'Delete', 'Tab', 'Backspace', 
         'Home', 'End', 'ArrowLeft', 'ArrowRight',
         '1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
            return
	} else event.preventDefault();
});

input.addEventListener('input', (event) => {
    // console.log(input.value)
    if (input.value.length != 0){
        search_button.classList.add('clear_on');
        clear_button.classList.add('clear_on');
    }else {
        setTimeout(() => {
            search_button.classList.remove('clear_on');
            clear_button.classList.remove('clear_on');
        }, 300);
    };
});


// input.addEventListener('keydown', (event) => {
//     if (event.key != 'Backspace' && event.key != 'Delete'){
//         if (input.value.length == 1) input.value = input.value + ' ';
//         if (input.value.length == 8) input.value = input.value + ' ';
//     };
// });

function input_focus(){
    video.classList.add('onfocus');
    input_zone.classList.add('onfocus');
    input.classList.add('onfocus');
    camera_button.classList.add('onfocus');
};

document.addEventListener('click', (event) => {
    const insideInput = event.composedPath().includes(input);
    const insideSearch = event.composedPath().includes(search_button);
    const insideClear = event.composedPath().includes(clear_button);

    if (input_zone.classList.contains('onfocus') &&
        !insideInput && !insideSearch && !insideClear)
        input_blur()
    else if (insideInput && !input_zone.classList.contains('onfocus'))
             input_focus();
});

function input_blur(){
    video.classList.remove('onfocus');
    input_zone.classList.remove('onfocus');
    input.classList.remove('onfocus');
    camera_button.classList.remove('onfocus');
};

// Quagga.init({
//     inputStream : {
//       name : "Live",
//       type : "LiveStream",
//       target: video,
      
//     },
//     frequency: 2,
//     decoder: {
//         readers: ["code_128_reader", "ean_reader"],
//         debug: {
//             showCanvas: true,
//             showPatches: true,
//             showFoundPatches: true,
//             showSkeleton: true,
//             showLabels: true,
//             showPatchesLabels: true,
//             showRemainingPatchesLabels: true,
//             boxFromPatches: {
//                 showTransformed: true,
//                 showTransformedBox: true,
//                 showBB: true,
//             }
//         },
//         // locate: true,
//     }
//   }, function(err) {
//       if (err) {
//           console.log(err);
//           return
//       }
//       console.log("Initialization finished. Ready to start");
//       Quagga.start();
//   });

//   Quagga.onProcessed(function(result) {
//     var drawingCtx = Quagga.canvas.ctx.overlay,
//         drawingCanvas = Quagga.canvas.dom.overlay;

//     if (result) {
//         if (result.boxes) {
//             drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
//             result.boxes.filter(function (box) {
//                 return box !== result.box;
//             }).forEach(function (box) {
//                 Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
//             });
//         }

//         if (result.box) {
//             Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
//         }

//         if (result.codeResult && result.codeResult.code) {
//             Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
//         }
//     }
// });

// Quagga.onDetected(function(result) {
//     var code = result.codeResult.code;

//     if (App.lastResult !== code) {
//         App.lastResult = code;
//         var $node = null, canvas = Quagga.canvas.dom.image;

//         $node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
//         $node.find("img").attr("src", canvas.toDataURL());
//         $node.find("h4.code").html(code);
//         $("#result_strip ul.thumbnails").prepend($node);
//     }
// });



