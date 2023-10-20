function solution(n) {
    const countOfOne = n.toString(2).replace(/0/g, '').length
    let answer = n + 1
    while(answer > n) {
        const countOfAnswer = answer.toString(2).replace(/0/g, '').length
        
        if(countOfAnswer === countOfOne) {
            break
        } else {
            answer++
        }
    }
    return answer
}