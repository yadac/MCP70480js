var Yadac = Yadac || {};

Yadac.Triangle = function () {
    var _base = 1, _height = 1;
    this.getArea = function () {
        return _base * _height / 2;
    }
}

var t = new Yadac.Triangle();
console.info(t.getArea());