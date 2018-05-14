"use strict";

let result = 0;

window.onload = function () {
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

// 4-42
// you can retrieve value from object of args using label. 
// ex. m442({ id: 1, name: 'yadac', address: 'tokyo' }); -> 'yadac'
function m442({ name }) {
    console.info(name);
}

// 4-43
// using Destructuring assignment feature, retuen multiple values.
// ex. console.dir(getMaxMin(1, 2, 3, 4, 5));
function getMaxMin(...nums) {
    return { max: Math.max(...nums), min: Math.min(...nums) };
}

// 4-44
// recursive
function factorial(n) {
    if (n != 0) {
        return n * (n - 1);
    }
    return 1;
}

// 4-46
function arrayWalk(data, f) {
    for (let d of data) {
        f(d);
    }
}

function showElement(d) {
    console.info(d);
}

function sumElement(d) {
    result += d;
}

// 4-48
function escapeHtml(str) {
    if (!str) { return ''; }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

// tagged template string
// templates = [0]="hello, ", [1]="-san."
// ...values = name #values[1] = undefined, !str will be false. 
// let name = '<"Mario" & \'Luigi\'>';
// console.log(e`hello, ${name}-san.`);
function e(templates, ...values) {
    let result = '';
    for (let i = 0, len = templates.length; i < len; i++) {
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
}

// 4-51 closure
// var myFunction = new myClosure(1);
// console.info(myFunction());
// console.info(myFunction());
function myClosure(num) {
    var result = num;
    return function () {
        return ++result;
    }
}

