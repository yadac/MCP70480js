"use struct"

class Member {

    // constructor with args, initialize
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    // method, just property
    getName() {
        return this.last + this.first;
    }
}

let m = new Member('taro', 'yamada');
console.info(m.getName());
