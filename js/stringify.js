var obj = {
    a: 1,
    b: "Moji",
    c: [1, 2, 3, 4],
    d: {
        "A": 1,
        "B": 2
    }
};
console.log(JSON.stringify(obj));

// stringify = JavaScript の値を JSON 文字列に変換します
// parse = JSON 文字列を解析して JavaScript のオブジェクトに変換

var data = {
    "transportation": {
        "leg": "primary",
        "method": "ocean",
        "responsibility": "carrier",
        "origin": {
            "type": "portofload",
            "name": "djkarta",
            "unloc": "idjkt"
        },
        "destination": {
            "type": "portofdischarge",
            "name": "newark",
            "unloc": "usewr"
        }
    }
}

// objectの文字列表現
var datas = JSON.stringify(data);
var filterd = JSON.stringify(data, filter);

console.log(datas);
console.log(filterd);

function filter(key, value) {
    var newValue = value;
    switch (key) {
        case "unloc":
        case "responsibility":
            newValue = undefined;
            break;
    }
    return newValue;
}