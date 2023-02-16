function solution(x) {
    let a = Array.from(String(x)).reduce((pre, cur) => (pre += Number(cur)), 0)
    console.log(a)
    return x % a === 0
}