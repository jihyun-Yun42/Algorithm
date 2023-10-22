function solution(n) {
    let answer;
    let prevNum = 1
    let initialNum = 0
    for(let i = 2; i <= n; i++) {
        answer = (prevNum + initialNum) % 1234567
        initialNum = prevNum
        prevNum = answer
    }
    return answer
}