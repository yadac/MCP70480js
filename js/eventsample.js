$(function () {

    // register eventhandler
    $('#eventsample').click(function () {
        Hide($(this), function () {
            window.alert("hidden!");
        });
    });
});

function Hide(element, onhidden) {
    element.css("visibility", "hidden");
    setTimeout(() => {
        onhidden();
    }, 500);
}
