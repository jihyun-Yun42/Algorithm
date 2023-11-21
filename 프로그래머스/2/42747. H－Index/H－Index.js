function solution(citations) {
    citations.sort((a, b) => b - a)
    
    let answer = 0
    for(let i = 1; i <= citations.length; i++) {
        if( i <= citations[i-1]) {
            answer = i
        }
    }
    return answer
}