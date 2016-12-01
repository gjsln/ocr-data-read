function clickFileInput() {
    document.getElementById('my_file').click();
}

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
