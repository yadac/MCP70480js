function playVideo() {
    var player = document.getElementById("player");
    var videoF = document.getElementById("videoFile");
    if (videoF.value) {
        player.src = videoF.value;
        player.play();
    }
}

