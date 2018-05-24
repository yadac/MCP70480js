self.onmessage = function (e) {
    var result = VerifyAddress(e.data);
    console.log(self);
    self.postMessage(result);
}

function VerifyAddress(address) {
    // long-running verification code ommitted.
    return address + " verified!!";
}