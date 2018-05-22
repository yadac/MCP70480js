self.addEventListener('message', function (e) {

    // just return received message to called worker instance with self.
    // self.postMessage(e.data); 

    (function () {
        let timer = setInterval(function () {
            console.log("message is: " + e.data);
            // processMessage('exit');
        }, 500);
    })();

}, false);

// just function
var processMessage = function (e) {
    console.log("[processMessage] message is: " + e);

};
