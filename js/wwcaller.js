var caller = new Worker("./js/worker.js");
caller.postMessage({ "name": "yamada", "age": 20 });
caller.addEventListener("message", function (data) {
    console.log(data.data.name);
});

setTimeout(() => {
    caller.postMessage({ "name": "takahashi", "age": 30 })
}, 1000);