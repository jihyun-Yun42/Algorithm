function solution(a, b) {
    const firstNum = Number(String(a) + String(b))
    const secondNum = 2 * a * b
    
    return Math.max(firstNum, secondNum)
}