function Triangle() {

    "use strict";

    // declare with var keyword, in constructor
    // if without var, it will be global property.
    // private var live in the function = closure.
    var _base;
    var _height;

    // private method
    var _checkArgs = function (val) {
        return (typeof val === 'number' && val > 0);
    }

    Object.defineProperties = {
        base: {
            get: function () {
                return _base;
            },
            set: function (num) {
                if (_checkArgs(num)) {
                    _base = num;
                }
            }
        },
        height: {
            get: function () {
                return _height;
            },
            set: function (num) {
                if (_checkArgs(num)) {
                    _height = num;
                }
            }
        }
    };
};

Triangle.prototype.getArea = function () {
    return this.base * this.height / 2;
}

var t = new Triangle();
t.base = 10;
t.height = 2;
console.info(`t.base : ${t.base}`);
console.info(`t.height : ${t.height}`);
console.info(`t.getArea() : ${t.getArea()}`);
