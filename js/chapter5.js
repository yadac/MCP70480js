"use strict";


// 5-03 javascriptにおけるクラス
// constructor内でthisを付けると自身のpropertyとして宣言できる
function Member(first, last) {
    this.first = first;
    this.last = last;
    this.getName = function () {
        return this.first + " " + this.last;
    }
    // sealでプロパティの拡張禁止できる
    // Object.seal(this);
}

var mem1 = new Member('yosuke', 'adachi');
mem1.getGreeting = function () {
    return `hello ${this.getName()}`;
}

console.info(mem1.getName());
console.info(mem1.getGreeting());
