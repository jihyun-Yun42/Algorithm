function solution(t, p) {
    let answer = 0
    for(let i = 0; i <= t.length - p.length; i++) {
        if(t.split('').splice(i, p.length).join('') <= p){
            answer++
        }
    }
    return answer
}