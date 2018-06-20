var worker;
setTimeout(() => {
    worker = new Worker('./js/doWork.js');
    // define the process on worker's onmessage event handler
    // worker.addEventListener('message', function (e) {
    //     console.log('Worker said: ', e.data);
    // }, false);
    worker.postMessage('Hello World'); // send data to our worker.
    // worker.processMessage('exit'); // error
}, 3000);

(function () {
    let counter = 0;
    let timer = setInterval(function () {
        console.info(counter);
        if (counter >= 5) {
            console.info("over 5");
            clearInterval(timer);
            // terminate background task by webworker.
            worker.terminate();
        }
        counter++;
    }, 1000);
})();