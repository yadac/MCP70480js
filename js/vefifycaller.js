function VerifyAddress() {
    var addressVerifier = new Worker("./js/AddressVerifier.js");
    // set eventhandler and callback?
    addressVerifier.addEventListener("message", OnComplete);
    addressVerifier.postMessage($('#address').val());
}

function OnComplete(e) {
    // postmessageの中身だからe.dataでアクセスできるの？
    alert(e.data);
}