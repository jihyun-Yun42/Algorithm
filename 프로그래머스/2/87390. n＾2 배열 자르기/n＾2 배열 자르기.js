function solution(n, left, right) {
    const answer = []
    
    for(let i = left; i <= right; i++) {
        const line = parseInt(i / n) + 1
        const row = i % n + 1
        answer.push(Math.max(line, row))
    }
    return answer
}