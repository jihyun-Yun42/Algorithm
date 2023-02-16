function solution(x) {
    return x % Array.from(String(x)).reduce((pre, cur) => (pre += Number(cur)), 0) === 0
}