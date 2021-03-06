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

class BusinessMember extends Member {
    work() {
        return this.getName() + " works!";
    }
}

let m = new BusinessMember('taro', 'yamada');
console.info(m.work());
