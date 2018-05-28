"use strict";

$(function () {

    $('#btn1').click(function (e) {
        let formData = $('#myform').serialize();
        console.info(`formData = ${formData}`);
        e.preventDefault();
    });

});

