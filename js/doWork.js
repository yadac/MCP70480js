self.addEventListener('message', function (e) {
    console.log("message is: " + e.data);
    // self.postMessage(e.data);
}, false);