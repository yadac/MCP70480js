var str = "yosuke";
var exp = /^[a-zA-Z0-9]{3,10}$/;
var regex = new RegExp(exp);
console.log(str.match(regex));