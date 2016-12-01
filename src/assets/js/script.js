function clickFileInput() {
    document.getElementById('my_file').click();
}
/*
$('input[type=file]').change(function (e) {

    imageToBase64(document.getElementById('my_file').files);
});

function imageToBase64(filesSelected) {

    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;

            document.getElementById("imgTest").innerHTML = newImage.outerHTML;

            console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        }
        fileReader.readAsDataURL(fileToLoad);

        setTimeout(function () {
            base64ToArrayBuffer(document.getElementById("imgTest").innerHTML);
        }, 1000);
    }
}

function base64ToArrayBuffer(base64) {

    var binary_string = window.atob(base64);

    var len = binary_string.length;

    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }

    return bytes.buffer;
}

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}*/

function rotateLeft() {

    $("#ocrimage").rotate(getPrevAngle());

}
function undo() {
    if (lastRotation == "right") {
        rotateLeft();
    } else if (lastRotation == "left") {
        rotateRight();
    }
}
function deleteImg() {
    $(".ocr-image-container img").remove();
}
function rotateRight() {

    var w = $('.ocrimage-container').width();
    var h = $('.ocrimage-container').height();

    $('#ocrimage').rotate(getNextAngle());
    $('.ocrimage-container').css('height', w);
    $('.ocrimage-container').css('width', h);

}

nextAngle = 0;
lastRotation = "";
function getNextAngle() {
    lastRotation = "right";
    nextAngle += 90;
    if (nextAngle >= 360) {
        nextAngle = 0;
    }
    return nextAngle;
}

function getPrevAngle() {
    lastRotation = "left";
    nextAngle -= 90;
    if (nextAngle >= 360) {
        nextAngle = 0;
    }
    return nextAngle;
}

$(document).ready(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var elmnt = document.getElementById("ocr-image-content");
    canvas.width = elmnt.offsetWidth;
    canvas.height = elmnt.offsetHeight;
    ctx.lineWidth = 1;

    var $canvas = $("#canvas");
    var canvasOffset = $canvas.offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;


    var $0 = $("#0");
    var $1 = $("#1");
    var $2 = $("#2");
    var $0r = $("#0r");
    var $1r = $("#1r");
    var $2r = $("#2r");

    var connectors = [];
    connectors.push({
        from: $0,
        to: $1
    });
    connectors.push({
        from: $0,
        to: $0r
    });
    connectors.push({
        from: $1,
        to: $1r
    });
    connectors.push({
        from: $0r,
        to: $1r
    });
    connect();

    $(".draggable").draggable({
        // event handlers
        start: noop,
        drag: connect,
        stop: noop
    });
    function noop() { }

    function connect() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < connectors.length; i++) {
            var c = connectors[i];
            var eFrom = c.from;
            var eTo = c.to;
            var pos1 = eFrom.offset();
            var pos2 = eTo.offset();
            var size1 = eFrom.size();
            var size2 = eTo.size();
            ctx.beginPath();
            ctx.moveTo(pos1.left + eFrom.width(), pos1.top + eFrom.height() / 2);
            ctx.lineTo(pos2.left + 5, pos2.top + eTo.height() / 2);
            ctx.stroke();
        }
    }
});
