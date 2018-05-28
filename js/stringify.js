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