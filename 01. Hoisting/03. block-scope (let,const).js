if(true) {
    let a = 10
    if(true) {
        console.log(a) // reference Error: a is not defined
        const a = 20
    }
    console.log(a) // 10
}
console.log(a) // RefernceError: a is not defined