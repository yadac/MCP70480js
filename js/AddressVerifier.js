// self references the scope of the worker object.
self.onmessage = function (e) {
    console.log(this);
    var result = VerifyAddress(e.data);

    // この意味がわからない
    // なんで、このresultがコールバック関数のパラメータになるのか？
    // なんか、もう一回自分のmessageイベントが発火しそうな気がするんだけど...
    // 
    // http://outofmem.hatenablog.com/entry/2014/08/28/044018
    // そーなんだろーけど理屈がわからん
    // 同じmessageイベントでもcaller側とcalled側別々に定義しているってこと？
    // caller側: addressVerifier.addEventListener("message", OnComplete);
    // called側: ここ
    self.postMessage(result);
}

function VerifyAddress(address) {
    // long-running verification code ommitted.
    return address + " verified!!";
}