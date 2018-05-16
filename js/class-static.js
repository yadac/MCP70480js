class Triangle {

    constructor(base, height) {
        this._base = base;
        this._height = height;
    }

    static getArea(b, h) {
        return b * h / 2;
    }
}

console.info(Triangle.getArea(2, 10));