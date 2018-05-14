"use strict";

// javascriptにおけるクラス
// thisを付けることで自身のpropertyとして宣言できる
function Member(first, last) {
    this.first = first;
    this.last = last;
    this.getName = function () {
        return this.last + " " + this.first;
    }
}

var mem1 = new Member('yosuke', 'adachi');
console.info(mem1.getName());