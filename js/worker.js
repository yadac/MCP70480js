self.onmessage = function (event) {
    var name = event.data.name;
    console.log(name);
    self.close();
}

// self.postMessage({ "name": "taro" });