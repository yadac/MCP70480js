function Triangle() {

    // declare with var keyword, in constructor
    // if without var, it will be global property.
    // private var live in the function = closure.
    var _base;
    var _height;

    // private method
    var _checkArgs = function (val) {
        return (typeof val === 'number' && val > 0);
    }

    // instance method, you can access this through the instance
    // xxx.setBase(1);
    this.setBase = function (base) {
        if (_checkArgs(base)) {
            _base = base;
        }
    }

    this.getBase = function () {
        return _base;
    }

    this.addHeight = function (num) {
        _height += num;
    }

    this.setHeight = function (height) {
        if (_checkArgs(height)) {
            _height = height;
        }
    }

    this.getHeight = function () {
        return _height;
    }
}

Triangle.prototype.getArea = function () {
    return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
t.setBase(10);
t.setHeight(2);
t.addHeight(1);
console.info(`t.getBase() : ${t.getBase()}`);
console.info(`t.getHeight() : ${t.getHeight()}`);
console.info(`t.getArea() : ${t.getArea()}`);
