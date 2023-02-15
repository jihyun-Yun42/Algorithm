function solution(x, n) {
    let a = [x]
    for (let i = 2; i <= n; i++) {
        a.push(x * i)
    }
    return a
}