((maxnumber = 5) => {
    // default is 5
    let sum = 0;
    let count = 1;
    while (count <= maxnumber) {
        sum += count ** 2;
        // sum += Math.pow(count, 2);
        count++;
    }
    console.log(sum);
})();