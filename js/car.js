$(function () {

    // $('#carbutton').on('click', function () {
    //     car.accelerateAfterClick();
    // });

    carbutton.onclick = function () {
        car.accelerateAfterClick();
    }

    vehicle.prototype.accelerateAfterClick = function () {
        this.speed = this.speed * 2 + 1;
        alert(this.speed);
    };

    var car = new vehicle();
    car.accelerateAfterClick();


});

function vehicle() {
    this.speed = 0;
}
