if (window.navigator.geolocation) {
    console.log("you can use geolocation API!!");
    navigator.geolocation.getCurrentPosition(successFunc, () => {
        // failFunc implements by arrow function style
        console.log("you failed...");
    }, null);
}

function successFunc(d) {
    console.log("successed!")
    console.dir(d);
    // The current position shifts slightly ... 
    console.log(`coords.latitude = ${d.coords.latitude}`);
    console.log(`coords.longitude = ${d.coords.longitude}`);
}
