"use strict";


// 5-03 javascriptにおけるクラス
// constructor内でthisを付けると自身のpropertyとして宣言できる
function Member(first, last) {
    // newを忘れて呼び出された場合を考慮（自分でやるの？）
    if (!(this instanceof Member)) {
        console.info('complemented the missing keyword "new"');
        return new Member(first, last);
    }
    this.first = first;
    this.last = last;
    this.getName = function () {
        return this.first + " " + this.last;
    }
    // sealでプロパティの拡張禁止できる
    // Object.seal(this);
}
// prototype add property, before create instance
Member.prototype.sex = 'male';

var mem1 = new Member('yosuke', 'adachi');
// var mem1 = Member('yosuke', 'adachi'); missing new
mem1.getGreeting = function () {
    return `hello ${this.getName()}`;
}

// console.info(mem1.getName());
// console.info(mem1.getGreeting());

var data = 'global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };

function hoge() {
    console.info(this.data);
}

// call = thisで使用する引数を指定して関数を呼び出す
// "use strict"を外したらnullのcaseの結果は'global data'となる
// hoge.call(null);
// hoge.call(obj1);
// hoge.call(obj2);

// instead of ESMA2015 Array.from
function huga() {
    var args = Array.prototype.slice.call(arguments);
    console.info(args.join('/'));
}

// huga('angular', 'react', 'vue');


// 5-10 prototype
Member.prototype.getName2 = function () {
    return this.last + this.first;
}

var mem2 = new Member('hanako', 'sato');
// console.info(mem2.getName2());
console.info(`mem1.sex = ${mem1.sex}`); // male
console.info(`mem2.sex = ${mem2.sex}`); // male
mem2.sex = 'famale';
console.info(`mem1.sex = ${mem1.sex}`); // male
console.info(`mem2.sex = ${mem2.sex}`); // famele

