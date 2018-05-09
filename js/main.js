"use strict";

window.onload = function () {
    // console.info(sum(1, 2, 3, 4, "5"));
    m438();
}

// 4-29
function getTriangle(base = 1, height = 1) {
    return base * height / 2;
}

// 4-36-1
function required() {
    throw new Error('argument is missing');
}

// 4-36-2
function hoge(value = required()) {
    // if argument exists, argument sets value.
    // if argument does not exist, required() fire when return.
    return value;
}

// 4-37
// es6 ...xxx uses instead of [arguments].
function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        if (typeof num !== 'number') {
            throw new Error(`argument is not number: ${num}`);
        }
        result += num;
    }
    return result;
}

// 4-38
function m438() {
    let array = [1, 2, 3, 4, 5];
    // ... expands array
    console.info(Math.max(...array));
}