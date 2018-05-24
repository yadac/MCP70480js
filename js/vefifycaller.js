function VerifyAddress() {
    var addressVerifier = new Worker("./js/AddressVerifier.js");
    // set eventhandler and callback?
    addressVerifier.addEventListener("message", OnComplete);
    addressVerifier.postMessage($('#address').val());
}

function OnComplete(e) {
    alert(e.data);
}