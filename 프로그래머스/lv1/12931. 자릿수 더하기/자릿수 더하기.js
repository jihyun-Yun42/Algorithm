function solution(n) {
    return String(n).split('').reduce((pre, cur) => (pre += Number(cur)), 0)
}