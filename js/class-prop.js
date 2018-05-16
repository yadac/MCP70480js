"use strict"

class Member {
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }

    // why property needs _ at before property name?
    // property name use as getter/setter method name.
    get first() {
        return this._first;
    }

    set first(val) {
        this._first = val;
    }

    get last() {
        return this._last;
    }

    set last(val) {
        this._last = val;
    }

    // use getter
    getName() {
        return this.first + this.last;
    }
}

let m = new Member('taro', 'yamada');
console.dir(m);
console.info(m.getName());