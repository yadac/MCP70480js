function Device() {
};

function Circle(radius) {
    this.radius = radius;
    this.Circumference = function () {
        return 2 * Math.PI * radius;
    }
}

Circle.prototype.getArea = function () {
    return Math.PI * this.radius * this.radius;
}


var device = new Device();
Device.prototype.modelNumber = "xxx";
console.log(`device.modelNumber = ${device.modelNumber}`);

var circle = new Circle(3);
console.log(`circle.getArea() = ${circle.getArea()}`);