"use strict";

window.onload = function () {
    var stage = document.getElementById('stage');
    var ctx;
    var width = 480;
    var height = 260;

    if (typeof stage.getContext === 'undefined') {
        return;
    }

    ctx = stage.getContext('2d');
    stage.width = width;
    stage.height = height;
}

