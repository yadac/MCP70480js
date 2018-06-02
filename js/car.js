$(function () {

    $('#carbutton').on('click', function () {
        console.log('hello');
        car.accelerateAfterClick();
    });

});

function vehicle() {
    this.speed = 0;
}

vehicle.prototype.accelerateAfterClick = function () {
    this.speed = this.speed * 2 + 1;
    alert(this.speed);
};

var car = new vehicle();
