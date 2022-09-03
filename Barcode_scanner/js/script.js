
let video = document.querySelector('video');
let camera_button = document.querySelector('.camera');
let input = document.querySelector('input');
let input_zone = document.querySelector('.input_zone');


camera_button.addEventListener('click', camera_access);

let options = {
    video: {
    // facingMode: {exact: "environment"},
    width: 1350,
    height: 1280
    }
};

function camera_access(){
    // запрашиваем доступ к веб-камере
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


function open_camera(){
    video.classList.add('active');
    video.classList.add('camera_on');
    input_zone.classList.add('camera_on');
    input.classList.add('camera_on');
};

function toggle_camera(){
    // if (!video.classList.contains('camera_on')) video.getTracks().play();
    input_zone.classList.toggle('camera_on');
    input.classList.toggle('camera_on');
    video.classList.toggle('camera_on');
    // if (!video.classList.contains('camera_on')) video.getTracks().stop();
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

// Number filter
input.addEventListener('keydown', (event) => {
    if (['-', '.'].includes(event.key)) event.preventDefault();
    if (input.value.length > 12 && 
        ['1','2','3','4','5','6','7','8','9','0'].includes(event.key)) 
        event.preventDefault();
	if (['Escape', 'Delete', 'Tab', 'Backspace', 
         'Home', 'End', 'ArrowLeft', 'ArrowRight',
         '1','2','3','4','5','6','7','8','9','0'].includes(event.key)) {
		return;
	} else event.preventDefault();
});

// input.addEventListener('keydown', (event) => {
//     console.log(input.value[0]);
//     // input.value[0].style.color = 'red';
//     // input.value[1].style.color = 'blue';
// });

input.onfocus = () => {
    video.classList.add('onfocus');
    input_zone.classList.add('onfocus');
    input.classList.add('onfocus');
    camera_button.classList.add('onfocus');
};
input.onblur = () => {
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



