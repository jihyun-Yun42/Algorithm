function solution(n) {
    let arr = []
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((acc, pre) => acc + pre, 0)
}