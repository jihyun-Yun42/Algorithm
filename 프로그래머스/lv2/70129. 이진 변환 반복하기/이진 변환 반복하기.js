function solution(s) {
    const answer = [0, 0]
    
    while (s !== '1') {
        s = [...s]
        let count = s.filter(e => e !== '0').length
        answer[0] += 1
        answer[1] += s.length - count
        s = count.toString(2)
    }
    
    return answer
}