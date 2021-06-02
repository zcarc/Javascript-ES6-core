// 함수 스코프 예시 - 01. block-scope 의 내용과 같다.
(function () {
    var a = 10;
    (function () {
        console.log(a)
        var a = 20;
    })()
    console.log(a)
})()
console.log(a)