// 블럭 스코프 예시
{
    let a = 10
    {
        let a = 20
        console.log(a)
    }
    console.log(a)
}
console.log(a)
