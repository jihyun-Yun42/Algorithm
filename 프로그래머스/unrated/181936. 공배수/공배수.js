function solution(number, n, m) {
    const A = number % n
    const B = number % m
    
    return A === 0 && B === 0 ? 1 : 0
}