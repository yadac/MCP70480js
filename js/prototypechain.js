$(function () {

});

// base class
var Animal = function (name) {
    // prevent calling as function
    if (!(this instanceof Animal)) {
        return new Animal(name);
    }
    this.name = name;
    this.getName = function () {
        return this.name;
    }
};

// add method
Animal.prototype.walk = function () {
    console.info('toko toko toko...');
}

// inherits class
var Dog = function (name) {
    Animal.call(this, name);
};
Dog.prototype = new Animal();
Dog.prototype.bang = function () {
    console.info("bow bow");
}

var d = new Dog("taro");
console.info(d.getName());
d.walk();
d.bang();

// constructor indicates base class's one
console.info(`d.constructor === Animal : ${d.constructor === Dog}`);
console.info(`d.constructor === Animal : ${d.constructor === Animal}`);

// both true, can refer prototypechain
console.info(`d instanceof Dog : ${d instanceof Dog}`);
console.info(`d instanceof Dog : ${d instanceof Animal}`);
