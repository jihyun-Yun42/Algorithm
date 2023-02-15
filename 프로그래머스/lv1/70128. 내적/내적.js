function solution(a, b) {
    return a.reduce((pre, cur, i) => (pre + (a[i] * b[i])), 0)
}