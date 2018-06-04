var i = 0;

function scopeA() {
    return i; // 0 return global val = 0
}

function scopeB(i) {
    return i;   // return local val = args 1
}

function scopeC(i) {
    if (true)
        var i = 2;
    return i;   // return local val = 2
}

function scopeD(i) {
    if (true) {
        let i = 2; // block scope
    }
    return i // return local val = args 1
}

console.log(scopeA());
console.log(scopeB(1));
console.log(scopeC(1));
console.log(scopeD(1));
