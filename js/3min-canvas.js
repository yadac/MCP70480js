"use strict";

window.onload = function () {
    // var stage = document.getElementById('stage');
    // var ctx;
    // var width = 480;
    // var height = 260;

    // if (!stage) return;

    // if (typeof stage.getContext === 'undefined') {
    //     return;
    // }

    // ctx = stage.getContext('2d');
    // stage.width = width;
    // stage.height = height;

    // ctx.strokeRect(100, 50, 100, 50);
    // ctx.fillRect(120, 70, 100, 50);
}

$(function () {
    var canvas = $('#mycanvas');
    if (!canvas || !canvas.getContext) return false;
    var ctx = canvas.getContext('2d');

    var startX, startY, x, y, borderw;
    borderw = 10;

    // https://dotinstall.com/lessons/doodle_canvas/26303
    // canvas.mousedown(function (e) {
    //     startX = e.pageX - $(this).offset().left - borderw;
    //     startY = e.pageY - $(this).offset().top - borderh;
    // })
    //     .mousemove(function (e) {
    //         e.pageX
    //     })

});


